/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log("🌱 Start seeding...");

  // 1. Bersihkan data lama (Optional, biar id rapih)
  // Hati-hati: ini menghapus semua produk di database!
  try {
    await prisma.orderItem.deleteMany();
    await prisma.order.deleteMany();
    await prisma.product.deleteMany();
  } catch (error) {
    console.log(
      "⚠️  Table might be empty or not created yet, skipping delete."
    );
  }

  // 2. Data Dummy Produk UMKM (Warung Seblak & Cemilan)
  const products = [
    {
      name: "Seblak Original",
      price: 10000,
      description: "Kerupuk basah bumbu kencur pedas level 1-5",
    },
    {
      name: "Seblak Spesial Komplit",
      price: 15000,
      description: "Seblak dengan topping sosis, bakso, dan ceker",
    },
    {
      name: "Basreng Pedas Daun Jeruk",
      price: 8000,
      description: "Baso goreng renyah bumbu pedas nampol (250gr)",
    },
    {
      name: "Keripik Kaca",
      price: 5000,
      description: "Keripik singkong tipis bening pedas (100gr)",
    },
    {
      name: "Cimol Bojot",
      price: 7000,
      description: "Cimol goreng setengah matang bumbu bawang chili oil",
    },
    {
      name: "Es Teh Manis Jumbo",
      price: 4000,
      description: "Teh manis dingin ukuran cup besar",
    },
    {
      name: "Es Jeruk Peras",
      price: 5000,
      description: "Jeruk peras asli gula batu",
    },
    {
      name: "Paket Hemat Kenyang",
      price: 20000,
      description: "1 Seblak Original + 1 Es Teh Jumbo",
    },
  ];

  // 3. Masukkan ke Database
  for (const product of products) {
    const result = await prisma.product.create({
      data: product,
    });
    console.log(`Created product with id: ${result.id} - ${result.name}`);
  }

  console.log("✅ Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
