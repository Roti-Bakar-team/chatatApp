import { processChatAction } from "@/actions/order-actions";
import { ActionState } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { number, chatRaw } = await req.json();

    // Initial state for the action
    const initialState: ActionState = { success: false, message: "" };

    // Correctly call the action
    const res = await processChatAction(initialState, {
      chatRaw: chatRaw,
      userId: number,
    });

    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error: String(error) },
      { status: 500 }
    );
  }
}
