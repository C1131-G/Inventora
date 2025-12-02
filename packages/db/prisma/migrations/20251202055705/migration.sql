/*
  Warnings:

  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(12,2)` to `Integer`.

*/
-- DropIndex
DROP INDEX "Product_userId_name_idx";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "price" SET DATA TYPE INTEGER;

-- CreateIndex
CREATE INDEX "Product_userId_name_sku_idx" ON "Product"("userId", "name", "sku");
