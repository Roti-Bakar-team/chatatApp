/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from "../lib/prisma";
import { ParsedItem, ParsedOrder } from "@/types";
import { Prisma } from "../generated/prisma/client";

// Helper function to safely get quantity
const getItemQty = (item: ParsedItem): number => {
  // The AI might return 'quantity' or 'qty'
  return (item as any).quantity || item.qty || 0;
};

export async function createOrder(data: ParsedOrder, rawChat: string) {
  const totalAmount = data.items.reduce((acc, item) => {
    const qty = getItemQty(item);
    const price = item.priceEstimate || 0;
    return acc + price * qty;
  }, 0);

  return await prisma.order.create({
    data: {
      customerName: data.customerName || undefined,
      customerPhone: data.customerPhone || undefined,
      address: data.address || undefined,
      rawChatText: rawChat,
      totalAmount: new Prisma.Decimal(totalAmount),
      status: "PENDING",
      items: {
        create: data.items.map((item) => ({
          tempName: item.name,
          quantity: getItemQty(item), // Use helper to get correct quantity
          price: item.priceEstimate || 0,
          productId: item.matchedProductId || null,
        })),
      },
    },
    include: {
      items: true,
    },
  });
}

export async function getRecentOrders() {
  return await prisma.order.findMany({
    take: 10,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      items: true,
    },
  });
}
