"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  deleteOrderAction,
  updateOrderStatusAction,
} from "@/actions/order-actions";
import { OrderStatus } from "@/generated/prisma/client";
import { toast } from "sonner";

interface OrderActionsProps {
  orderId: number;
  currentStatus: OrderStatus;
}

export function OrderActions({ orderId, currentStatus }: OrderActionsProps) {
  const statuses: OrderStatus[] = ["PENDING", "PAID", "DONE", "CANCELLED"];

  const handleStatusChange = async (status: OrderStatus) => {
    try {
      const result = await updateOrderStatusAction(orderId, status);
      if (result.success) {
        toast.success(`Order #${orderId} status updated to ${status}.`);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "An unknown error occurred."
      );
    }
  };

  const handleDelete = async () => {
    // Optional: Add a confirmation dialog here
    try {
      const result = await deleteOrderAction(orderId);
      if (result.success) {
        toast.success(`Order #${orderId} has been deleted.`);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "An unknown error occurred."
      );
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {statuses.map((status) => (
          <DropdownMenuItem
            key={status}
            onClick={() => handleStatusChange(status)}
            disabled={currentStatus === status}
            className="capitalize"
          >
            Set as {status.toLowerCase()}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDelete} className="text-red-500">
          Delete Order
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
