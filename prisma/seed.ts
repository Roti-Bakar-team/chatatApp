/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "../src/generated/prisma/client"; // Sesuaikan path ini
import { PrismaPg } from "@prisma/adapter-pg";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

// Inisialisasi Better Auth khusus untuk Seeding
const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  // Pastikan BETTER_AUTH_SECRET ada di .env saat menjalankan seed
});

async function main() {
  console.log("🌱 Start seeding...");

  // 1. BERSIHKAN DATABASE (Opsional, hati-hati di production)
  try {
    // Hapus data lama agar bersih
    await prisma.session.deleteMany();
    await prisma.account.deleteMany();
    await prisma.user.deleteMany();
    await prisma.product.deleteMany();
    console.log("🧹 Database cleaned");
  } catch (error) {
    console.log("⚠️  Skip cleaning (table might be empty)");
  }

  // 2. CREATE ADMIN USER (Login Default)
  console.log("👤 Creating Admin User...");

  try {
    await auth.api.signUpEmail({
      body: {
        email: "admin@chatat.com",
        password: "admin123", // Password ini akan otomatis di-hash aman
        name: "Juragan Chatat",
      },
      asResponse: false, // Penting: Agar tidak return HTTP Response object
    });
    console.log("✅ Admin Created: admin@chatat.com / admin123");
  } catch (error) {
    console.log("ℹ️  User admin mungkin sudah ada.");
  }

  // 3. SEED PRODUK (MENU UMKM)
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
      name: "Es Teh Manis Jumbo",
      price: 4000,
      description: "Teh manis dingin ukuran cup besar",
    },
    {
      name: "Paket Hemat Kenyang",
      price: 20000,
      description: "1 Seblak Original + 1 Es Teh Jumbo",
    },
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
  }

  console.log(`✅ Berhasil membuat ${products.length} menu makanan.`);
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
