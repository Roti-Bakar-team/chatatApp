/*
  Warnings:

  - You are about to alter the column `totalAmount` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(12,2)`.
  - You are about to alter the column `price` on the `OrderItem` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - Added the required column `updatedAt` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Made the column `tempName` on table `OrderItem` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
ALTER TYPE "OrderStatus" ADD VALUE 'CANCELLED';

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_productId_fkey";

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "totalAmount" SET DATA TYPE DECIMAL(12,2);

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "productId" DROP NOT NULL,
ALTER COLUMN "tempName" SET NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,2);

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
