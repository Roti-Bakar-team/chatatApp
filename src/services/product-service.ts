import prisma from "@/lib/prisma";

export async function getProducts() {
  return await prisma.product.findMany();
}

export async function getProductById(id: number) {
  return await prisma.product.findUnique({
    where: { id },
  });
}

export async function createProduct(data: {
  name: string;
  price: number;
  description?: string;
}) {
  return await prisma.product.create({
    data: {
      ...data,
    },
  });
}

export async function updateProduct(
  id: number,
  data: { name?: string; price?: number; description?: string }
) {
  return await prisma.product.update({
    where: { id },
    data,
  });
}

export async function deleteProduct(id: number) {
  return await prisma.product.delete({
    where: { id },
  });
}

export async function getTotalProducts() {
  return await prisma.product.count();
}