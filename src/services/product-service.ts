import prisma from "@/lib/prisma";
import { Product } from "@/types";

export const productService = {
  getAll: async () => {
    return await prisma.product.findMany();
  },
  getOne: async (id: number) => {
    return await prisma.product.findUnique({
      where: { id },
    });
  },
  create: async (data: Product) => {
    return await prisma.product.create({
      data: {
        name: data.name,
        price: data.price,
        description: data.description,
      },
    });
  },
  update: async (id: number, data: Product) => {
    return await prisma.product.update({
      where: { id },
      data: {
        name: data.name,
        price: data.price,
        description: data.description,
      },
    });
  },
  delete: async (id: number) => {
    return await prisma.product.delete({
      where: { id },
    });
  },
};
