"use client";

import React, { useEffect } from "react";
import { useFormStatus } from "react-dom";
import { updateProductAction } from "@/actions/product-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="bg-indigo-600 hover:bg-indigo-700"
    >
      {pending ? (
        <Loader2 className="animate-spin w-4 h-4 mr-2" />
      ) : (
        "Simpan Perubahan"
      )}
    </Button>
  );
}

type EditProductDialogProps = {
  product: {
    id: number;
    name: string;
    price: string;
    description: string;
  };
  setOpen: (open: boolean) => void;
};

export function EditProductDialog({ product, setOpen }: EditProductDialogProps) {
  const [state, formAction] = React.useActionState(updateProductAction, {
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
  }, [state, setOpen]);

  return (
    <>
      <DialogHeader>
        <DialogTitle>Edit Menu: {product.name}</DialogTitle>
      </DialogHeader>

      <form action={formAction} className="grid gap-4 py-4">
        <input type="hidden" name="id" value={product.id} />

        <div className="grid gap-2">
          <Label htmlFor={`edit-name-${product.id}`}>Nama Menu</Label>
          <Input
            id={`edit-name-${product.id}`}
            name="name"
            defaultValue={product.name}
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor={`edit-price-${product.id}`}>Harga (Rp)</Label>
          <Input
            id={`edit-price-${product.id}`}
            name="price"
            type="number"
            defaultValue={product.price}
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor={`edit-description-${product.id}`}>Deskripsi</Label>
          <Textarea
            id={`edit-description-${product.id}`}
            name="description"
            defaultValue={product.description}
          />
        </div>

        <DialogFooter>
          <SubmitButton />
        </DialogFooter>
      </form>
    </>
  );
}
