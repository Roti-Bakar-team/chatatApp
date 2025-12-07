/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { createProductAction } from "@/actions/product-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Plus, Loader2 } from "lucide-react";
import { toast } from "sonner";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="bg-indigo-600 hover:bg-indigo-700 text-white"
    >
      {pending ? (
        <Loader2 className="animate-spin w-4 h-4 mr-2 text-white" />
      ) : (
        "Simpan Produk"
      )}
    </Button>
  );
}

export function AddProductDialog() {
  const [open, setOpen] = useState(false);
  const [state, formAction] = React.useActionState(createProductAction, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (state?.success) {
      setOpen(false);
      toast.success(state.message);
    } else if (state?.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
          <Plus className="w-4 h-4 mr-2" /> Tambah Menu
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambah Menu Baru</DialogTitle>
        </DialogHeader>

        <form action={formAction} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Nama Menu</Label>
            <Input
              id="name"
              name="name"
              placeholder="Contoh: Seblak Ceker"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="price">Harga (Rp)</Label>
            <Input
              id="price"
              name="price"
              type="number"
              placeholder="15000"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Deskripsi</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Detail rasa..."
            />
          </div>

          <DialogFooter>
            <SubmitButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
