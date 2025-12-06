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
    // --- A. VARIAN SEBLAK ---
    {
      name: "Seblak Original Kerupuk",
      price: 10000,
      description:
        "Seblak klasik isian kerupuk oranye dan mie. Bumbu kencur medok. Level pedas 0-5.",
    },
    {
      name: "Seblak Ceker Mercon",
      price: 13000,
      description:
        "Seblak dengan topping utama ceker ayam lunak yang dimasak pedas. Favorit pecinta ceker.",
    },
    {
      name: "Seblak Tulang Rangu",
      price: 15000,
      description:
        "Seblak dengan isian tulang muda sapi (rangu) yang kriuk-kriuk. Kuah lebih gurih berkaldu.",
    },
    {
      name: "Seblak Spesial Komplit",
      price: 18000,
      description:
        "Menu Sultan. Isian lengkap: Kerupuk, Mie, Sosis, Bakso, Ceker, Telur, dan Dumpling Cheese.",
    },
    {
      name: "Seblak Mie Kuah",
      price: 12000,
      description:
        "Varian seblak yang lebih banyak mie-nya daripada kerupuk. Cocok buat yang lapar berat.",
    },

    // --- B. CEMILAN PEDAS (BASRENG & TEMANNYA) ---
    {
      name: "Basreng Pedas Daun Jeruk (250gr)",
      price: 15000,
      description:
        "Baso goreng stik, tekstur renyah tidak keras. Bumbu cabai asli + irisan daun jeruk wangi.",
    },
    {
      name: "Basreng Original Asin (250gr)",
      price: 15000,
      description:
        "Baso goreng rasa original gurih asin bawang putih. Tidak pedas, cocok untuk anak-anak.",
    },
    {
      name: "Cimol Bojot (Porsi)",
      price: 8000,
      description:
        "Cimol goreng setengah matang dengan bumbu minyak bawang dan chili oil yang melimpah.",
    },
    {
      name: "Keripik Kaca Beling (100gr)",
      price: 5000,
      description:
        "Keripik singkong super tipis bening. Tersedia rasa Pedas Cabe Merah atau Cabe Ijo.",
    },
    {
      name: "Makaroni Bantet Pedas (100gr)",
      price: 6000,
      description:
        "Makaroni uril bantet yang kriuk, bumbu cikruh (basah berminyak) pedas nampol.",
    },
    {
      name: "Usus Crispy (100gr)",
      price: 10000,
      description:
        "Usus ayam digoreng tepung crispy. Gurih, renyah, tahan lama. Enak buat lauk.",
    },

    // --- C. MINUMAN ---
    {
      name: "Es Teh Manis Jumbo",
      price: 5000,
      description:
        "Teh manis melati dingin ukuran cup besar (22oz). Segar untuk menetralisir pedas.",
    },
    {
      name: "Es Jeruk Peras Murni",
      price: 8000,
      description: "Jeruk peras asli gula batu. Vitamin C tinggi.",
    },
    {
      name: "Air Mineral Botol",
      price: 4000,
      description: "Air mineral dingin 600ml (Aqua/Le Minerale).",
    },
    {
      name: "Nutrisari Dingin",
      price: 5000,
      description:
        "Minuman rasa buah (Jeruk/Mangga/Anggur) disajikan dengan es batu.",
    },

    // --- D. TOPPING TAMBAHAN (ADD-ON) ---
    // AI perlu tahu ini jika customer bilang "tambah sosis dong"
    {
      name: "Extra Topping Sosis",
      price: 3000,
      description: "Tambahan 2 buah sosis sapi potong.",
    },
    {
      name: "Extra Topping Bakso",
      price: 3000,
      description: "Tambahan 3 butir bakso sapi kecil.",
    },
    {
      name: "Extra Topping Telur",
      price: 4000,
      description:
        "Tambahan 1 butir telur (bisa request dadar/ceplok/orak-arik).",
    },
    {
      name: "Extra Topping Dumpling Keju",
      price: 3500,
      description: "Tambahan 1 pcs dumpling isi keju leleh.",
    },

    // --- E. PAKET HEMAT ---
    {
      name: "Paket Hemat Kenyang",
      price: 22000,
      description:
        "Bundling: 1 Seblak Original + 1 Es Teh Manis Jumbo + 1 Keripik Kaca.",
    },
    {
      name: "Paket Mabar (Untuk 2 Orang)",
      price: 40000,
      description: "Bundling: 2 Seblak Spesial Komplit + 2 Es Teh Jumbo.",
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
