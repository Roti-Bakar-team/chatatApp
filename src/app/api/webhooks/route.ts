import { NextResponse } from "next/server";
import { parseChatToOrder } from "@/services/ai-service";
import { createOrder } from "@/services/order-service";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { rawChat, sender, customerName } = body;

    const aiResult = await parseChatToOrder(rawChat);

    if (aiResult?.isOrder) {
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
