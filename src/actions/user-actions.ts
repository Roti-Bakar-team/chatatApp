/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { userService } from "@/services/user-service";
import { ActionState } from "@/types";
import { revalidatePath } from "next/cache";


export async function createUserAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!name || !email || !password) {
    return {
      success: false,
      message: "All fields are required",
    };
  }

  try {
    await userService.create({
      name,
      email,
      password,
    });
    revalidatePath("/users");

    return {
      success: true,
      message: "User created successfully",
    };
  } catch (error: any) {
    console.error("Create User Error:", error);
    return {
      success: false,
      message:
        error.message || "Gagal membuat user. Email mungkin sudah terdaftar",
    };
  }
}

export async function deleteUserAction(userId: string): Promise<ActionState> {
  if (!userId) {
    return {
      success: false,
      message: "User ID Tidak Valid",
    };
  }

  try {
    await userService.delete(userId);
    revalidatePath("/users");
    return {
      success: true,
      message: "User deleted successfully",
    };
  } catch (error: any) {
    console.error("Delete User Error:", error);
    return {
      success: false,
      message: error.message || "Gagal menghapus user",
    };
  }
}

export async function featchUserAction() {
  try {
    const users = await userService.getAll();
    return {
      success: true,
      data: users,
    };
  } catch (error: any) {
    console.error("Fetch User Error:", error);
    return {
      success: false,
      data: [],
    };
  }
}
