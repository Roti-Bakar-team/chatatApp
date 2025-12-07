/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from "@/lib/prisma";
import { ParsedItem, ParsedOrder } from "@/types";
import { OrderStatus, Prisma } from "@/generated/prisma/client";

const getItemQty = (item: ParsedItem): number => {
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

export async function getDashboardStats() {
  const totalRevenueResult = await prisma.order.aggregate({
    _sum: {
      totalAmount: true,
    },
    where: {
      status: {
        in: ["PAID", "DONE"],
      },
    },
  });

  const totalOrders = await prisma.order.count();

  const distinctCustomers = await prisma.order.findMany({
    select: {
      customerPhone: true,
    },
    distinct: ["customerPhone"],
    where: {
      customerPhone: {
        not: null,
      },
    },
  });

  return {
    totalRevenue: totalRevenueResult._sum.totalAmount ?? new Prisma.Decimal(0),
    totalOrders,
    totalCustomers: distinctCustomers.length,
  };
}

export async function getTopProducts() {
  const topProducts = await prisma.orderItem.groupBy({
    by: ["tempName"],
    _sum: {
      quantity: true,
    },
    orderBy: {
      _sum: {
        quantity: "desc",
      },
    },
    take: 5,
  });

  return topProducts.map((p) => ({
    name: p.tempName,
    sales: p._sum.quantity || 0,
  }));
}

export async function getOrders() {
  return await prisma.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      items: true,
    },
  });
}

export async function getOrderById(id: number) {
  return await prisma.order.findUnique({
    where: { id },
    include: {
      items: true,
    },
  });
}

export async function updateOrderStatus(id: number, status: OrderStatus) {
  return await prisma.order.update({
    where: { id },
    data: { status },
  });
}

export async function deleteOrder(id: number) {
  // First, delete related OrderItems due to the relation
  await prisma.orderItem.deleteMany({
    where: { orderId: id },
  });

  // Then, delete the Order itself
  return await prisma.order.delete({
    where: { id },
  });
}
