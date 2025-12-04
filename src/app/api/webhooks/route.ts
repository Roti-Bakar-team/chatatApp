import { NextResponse } from "next/server";
import { parseChatToOrder } from "@/services/ai-service";
import { createOrder } from "@/services/order-service";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { rawChat, sender, customerName } = body;

    // console.log("Webhook received:", rawChat);

    // 1. AI Parsing
    const aiResult = await parseChatToOrder(rawChat);

    // 2. Validasi & Save
    if (aiResult?.isOrder) {
      // Inject data sender dari WA jika AI gagal detect nama
      if (!aiResult.customerName) aiResult.customerName = customerName;
      if (!aiResult.customerPhone)
        aiResult.customerPhone = sender.replace("@s.whatsapp.net", "");

      await createOrder(aiResult, rawChat);
      return NextResponse.json({ status: "SAVED", message: "Order created" });
    }

    return NextResponse.json({ status: "IGNORED", message: "Not an order" });
  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
