import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getOrders } from "@/services/order-service";
import { OrderActions } from "@/components/dashboard/orders/order-actions";
import { Badge } from "@/components/ui/badge";
import { Order, OrderItem } from "@/generated/prisma/client";

export default async function OrderPage() {
  const orders = await getOrders();

  type OrderWithItems = Order & { items: OrderItem[] };

  return (
    <div className="flex flex-1 flex-col gap-2 p-4 md:gap-4 md:p-6">
      <Card>
        <CardHeader>
          <CardTitle>Daftar Pesanan ({orders.length})</CardTitle>
          <CardDescription className="mt-2">
            Kelola semua pesanan yang masuk dari pelanggan.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Items</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-center">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    Belum ada pesanan.
                  </TableCell>
                </TableRow>
              ) : (
                orders.map((order: OrderWithItems) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">
                      <div>{order.customerName || "N/A"}</div>
                      <div className="text-sm text-muted-foreground">
                        {order.customerPhone || "N/A"}
                      </div>
                    </TableCell>
                    <TableCell>
                      {order.items
                        .map((item) => `${item.quantity}x ${item.tempName}`)
                        .join(", ")}
                    </TableCell>
                    <TableCell className="text-right">
                      Rp {order.totalAmount.toNumber().toLocaleString("id-ID")}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          order.status === "PAID" || order.status === "DONE"
                            ? "default"
                            : order.status === "PENDING"
                            ? "secondary"
                            : "destructive"
                        }
                        className="capitalize"
                      >
                        {order.status.toLowerCase()}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <OrderActions
                        orderId={order.id}
                        currentStatus={order.status}
                      />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
