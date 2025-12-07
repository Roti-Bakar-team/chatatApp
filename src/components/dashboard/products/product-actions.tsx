"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditProductDialog } from "./edit-product-dialog";
import { DeleteProductButton } from "./delete-button";

type ProductActionsProps = {
    product: {
        id: number;
        name: string;
        price: string;
        description: string;
    }
}

export function ProductActions({ product }: ProductActionsProps) {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DialogTrigger asChild>
                         <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Edit</DropdownMenuItem>
                    </DialogTrigger>
                    <DeleteProductButton id={product.id} name={product.name} />
                </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent className="sm:max-w-[425px]">
                <EditProductDialog product={product} setOpen={setDialogOpen} />
            </DialogContent>
        </Dialog>
    );
}
