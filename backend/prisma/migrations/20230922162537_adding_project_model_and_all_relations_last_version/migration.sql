/*
  Warnings:

  - You are about to drop the column `deletedat` on the `deletedtask` table. All the data in the column will be lost.
  - You are about to drop the column `deletedby` on the `deletedtask` table. All the data in the column will be lost.
  - You are about to drop the column `updatedby` on the `taskhistory` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `DeletedTask` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorId` to the `TaskHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `deletedtask` DROP COLUMN `deletedat`,
    DROP COLUMN `deletedby`,
    ADD COLUMN `authorId` INTEGER NOT NULL,
    ADD COLUMN `deletetIn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `task` ADD COLUMN `projectId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `taskhistory` DROP COLUMN `updatedby`,
    ADD COLUMN `authorId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `ClientName` VARCHAR(191) NOT NULL,
    `isPresent` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeletedTask` ADD CONSTRAINT `DeletedTask_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskHistory` ADD CONSTRAINT `TaskHistory_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
