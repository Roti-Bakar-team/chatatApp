import prisma from "@/lib/prisma";
import { ConversationState } from "../generated/prisma/client";
import { ParsedOrder } from "@/types";

export type ConversationStage =
  | "GATHERING_ITEMS"
  | "CONFIRMING_ORDER"
  | "GATHERING_CUSTOMER_INFO"
  | "CONFIRMING_FINAL_ORDER"; 

export async function getConversationState(
  userId: string
): Promise<ConversationState | null> {
  return prisma.conversationState.findUnique({
    where: { id: userId },
  });
}

export async function updateConversationState(
  userId: string,
  state: ConversationStage,
  currentOrder: ParsedOrder
): Promise<ConversationState> {
  return prisma.conversationState.upsert({
    where: { id: userId },
    update: { state, currentOrder: currentOrder as any },
    create: { id: userId, state, currentOrder: currentOrder as any },
  });
}

export async function deleteConversationState(userId: string): Promise<void> {
  await prisma.conversationState.delete({
    where: { id: userId },
  });
}
