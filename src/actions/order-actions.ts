"use server";
import { processChatMessage } from "@/services/ai-service";
import { createOrder } from "@/services/order-service";
import {
  getConversationState,
  updateConversationState,
  deleteConversationState,
} from "@/services/conversation-service";
import { revalidatePath } from "next/cache";
import { ActionState, ParsedOrder, ParsedItem } from "@/types";

// Helper function to generate a detailed order summary string
function generateOrderSummary(order: ParsedOrder): string {
  let total = 0;
  const itemsSummary = order.items
    .map((item) => {
      const itemTotal = (item.priceEstimate || 0) * item.qty;
      total += itemTotal;
      return `- ${item.qty}x ${item.name} @ Rp${(
        item.priceEstimate || 0
      ).toLocaleString("id-ID")} = Rp${itemTotal.toLocaleString("id-ID")}`;
    })
    .join("\n");

  return `${itemsSummary}\n\nTotal: Rp${total.toLocaleString("id-ID")}`;
}

export async function processChatAction(
  prevState: ActionState,
  data: {
    chatRaw: string;
    userId ?: string;
  }
): Promise<ActionState> {
  const rawChat = data.chatRaw;
  const userId = data.userId || "default-user";

  if (!rawChat) {
    return { success: false, message: "Chat Tidak Boleh Kosong" };
  }

  try {
    const conversationState = await getConversationState(userId);
    const aiResult = await processChatMessage(rawChat, conversationState);

    if (!aiResult) {
      return { success: false, message: "AI tidak dapat memproses chat ini." };
    }

    // --- State Machine ---
    if (!conversationState) {
      // No state - Start of conversation
      if (aiResult.intent === "ORDER") {
        const newOrder = aiResult.response as ParsedOrder;
        await updateConversationState(userId, "CONFIRMING_ORDER", newOrder);
        const summaryText = generateOrderSummary(newOrder);
        return {
          success: true,
          message: `Pesanan Anda:\n${summaryText}\n\nAda tambahan lain atau sudah benar?`,
        };
      }
      return { success: true, message: aiResult.response as string };
    }

    // Existing state
    const currentOrder =
      conversationState.currentOrder as unknown as ParsedOrder;

    switch (conversationState.state) {
      case "CONFIRMING_ORDER":
        switch (aiResult.intent) {
          case "CONFIRMATION":
            await updateConversationState(
              userId,
              "GATHERING_CUSTOMER_INFO",
              currentOrder
            );
            return {
              success: true,
              message:
                "Baik, pesanan sudah dikonfirmasi. Mohon info nama, nomor HP, dan alamat pengiriman ya.",
            };
          case "ADD_ITEMS":
            const newItems = (aiResult.response as ParsedOrder).items;
            currentOrder.items.push(...newItems);
            await updateConversationState(
              userId,
              "CONFIRMING_ORDER",
              currentOrder
            );
            const summaryText = generateOrderSummary(currentOrder);
            return {
              success: true,
              message: `Pesanan diupdate:\n${summaryText}\n\nAda lagi?`,
            };
          default:
            return { success: true, message: aiResult.response as string };
        }

      case "GATHERING_CUSTOMER_INFO":
        if (aiResult.intent === "GATHER_INFO") {
          const customerInfo = aiResult.response as {
            customerName: string;
            customerPhone: string;
            address: string;
          };
          currentOrder.customerName = customerInfo.customerName;
          currentOrder.customerPhone = customerInfo.customerPhone;
          currentOrder.address = customerInfo.address;

          await updateConversationState(
            userId,
            "CONFIRMING_FINAL_ORDER",
            currentOrder
          );

          const finalSummary = `Berikut adalah detail pesanan Anda:\n\nCustomer:\n- Nama: ${
            currentOrder.customerName
          }\n- No. HP: ${currentOrder.customerPhone}\n- Alamat: ${
            currentOrder.address
          }\n\nPesanan:\n${generateOrderSummary(
            currentOrder
          )}\n\nApakah semua data sudah benar?`;

          return { success: true, message: finalSummary };
        }
        return {
          success: true,
          message:
            (aiResult.response as string) +
            " (Mohon lengkapi nama, no. HP, dan alamat Anda)",
        };

      case "CONFIRMING_FINAL_ORDER":
        if (aiResult.intent === "CONFIRMATION") {
          await createOrder(currentOrder, rawChat);
          await deleteConversationState(userId);
          revalidatePath("/dashboard");
          return {
            success: true,
            message: `Terima kasih! Pesanan atas nama ${currentOrder.customerName} sedang diproses. Info pembayaran akan dikirimkan selanjutnya.`,
            data: currentOrder,
          };
        } else if (aiResult.intent === "REJECT") {
          await updateConversationState(
            userId,
            "GATHERING_CUSTOMER_INFO",
            currentOrder
          );
          return {
            success: true,
            message:
              "Baik, mohon informasikan kembali data (nama, no. HP, alamat) yang ingin diubah.",
          };
        }
        return { success: true, message: aiResult.response as string };
    }

    return { success: false, message: "Alur tidak dikenali." };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Terjadi kesalahan server" };
  }
}
