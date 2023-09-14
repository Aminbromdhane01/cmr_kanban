-- CreateTable
CREATE TABLE `DeletedTask` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Taskid` INTEGER NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `priority` ENUM('LOW', 'NORMAL', 'HIGH', 'URGENT') NOT NULL DEFAULT 'LOW',
    `category` VARCHAR(191) NOT NULL,
    `stage` VARCHAR(191) NOT NULL,
    `orderdate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `enddate` DATETIME(3) NULL,
    `deletedby` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
