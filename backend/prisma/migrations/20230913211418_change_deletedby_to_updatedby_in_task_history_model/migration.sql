/*
  Warnings:

  - You are about to drop the column `deletedby` on the `taskhistory` table. All the data in the column will be lost.
  - Added the required column `updatedby` to the `TaskHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `taskhistory` DROP COLUMN `deletedby`,
    ADD COLUMN `updatedby` INTEGER NOT NULL;
