/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { productService } from "@/services/product-service";
import { ActionState } from "@/types";
import { revalidatePath } from "next/cache";

export async function createProductAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = formData.get("name") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  if (!name || !price) {
    return {
      success: false,
      message: "All fields are required",
    };
  }

  try {
    await productService.create({
      name,
      price: Number(price),
      description,
    });
    revalidatePath("/products");

    return {
      success: true,
      message: "Product created successfully",
    };
  } catch (error: any) {
    console.error("Create Product Error:", error);
    return {
      success: false,
      message: error.message || "Gagal membuat produk",
    };
  }
}

export async function updateProductAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  if (!id || !name || !price) {
    return {
      success: false,
      message: "All fields are required",
    };
  }

  try {
    await productService.update(Number(id), {
      name,
      price: Number(price),
      description,
    });
    revalidatePath("/products");

    return {
      success: true,
      message: "Product updated successfully",
    };
  } catch (error: any) {
    console.error("Update Product Error:", error);
    return {
      success: false,
      message: error.message || "Gagal memperbarui produk",
    };
  }
}

export async function deleteProductAction(id: number): Promise<ActionState> {
  try {
    await productService.delete(id);
    revalidatePath("/products");
    return {
      success: true,
      message: "Product deleted successfully",
    };
  } catch (error: any) {
    console.error("Delete Product Error:", error);
    return {
      success: false,
      message: error.message || "Gagal menghapus produk",
    };
  }
}

export async function fetchProductAction() {
  try {
    const products = await productService.getAll();
    return {
      success: true,
      data: products,
    };
  } catch (error: any) {
    console.error("Fetch Product Error:", error);
    return {
      success: false,
      data: [],
    };
  }
}

export async function fetchProductByIdAction(id: number) {
  try {
    const product = await productService.getOne(Number(id));
    return {
      success: true,
      data: product,
    };
  } catch (error: any) {
    console.error("Fetch Product Error:", error);
    return {
      success: false,
      data: [],
    };
  }
}
