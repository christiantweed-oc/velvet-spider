/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[key]` on the table `Status` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[key]` on the table `Workflow` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Client_slug_key` ON `Client`(`slug`);

-- CreateIndex
CREATE UNIQUE INDEX `Status_key_key` ON `Status`(`key`);

-- CreateIndex
CREATE UNIQUE INDEX `Workflow_key_key` ON `Workflow`(`key`);
