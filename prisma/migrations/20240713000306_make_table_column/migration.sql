/*
  Warnings:

  - You are about to drop the column `tableId` on the `Column` table. All the data in the column will be lost.
  - Added the required column `name` to the `Column` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Column` DROP FOREIGN KEY `Column_tableId_fkey`;

-- AlterTable
ALTER TABLE `Column` DROP COLUMN `tableId`,
    ADD COLUMN `name` VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE `TableColumn` (
    `columnId` VARCHAR(36) NOT NULL,
    `tableId` VARCHAR(36) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `TableColumn_columnId_tableId_key`(`columnId`, `tableId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TableColumn` ADD CONSTRAINT `TableColumn_tableId_fkey` FOREIGN KEY (`tableId`) REFERENCES `Table`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TableColumn` ADD CONSTRAINT `TableColumn_columnId_fkey` FOREIGN KEY (`columnId`) REFERENCES `Column`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
