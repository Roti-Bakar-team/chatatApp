-- CreateTable
CREATE TABLE "Pesan" (
    "id" SERIAL NOT NULL,
    "nomor" TEXT NOT NULL,
    "pesan" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pesan_pkey" PRIMARY KEY ("id")
);
