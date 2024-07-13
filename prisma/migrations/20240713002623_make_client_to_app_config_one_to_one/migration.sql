/*
  Warnings:

  - A unique constraint covering the columns `[clientId]` on the table `AppConfig` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `workflowId` to the `Table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Table` ADD COLUMN `workflowId` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `AppConfig_clientId_key` ON `AppConfig`(`clientId`);

-- AddForeignKey
ALTER TABLE `Table` ADD CONSTRAINT `Table_workflowId_fkey` FOREIGN KEY (`workflowId`) REFERENCES `Workflow`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
