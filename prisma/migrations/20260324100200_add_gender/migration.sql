/*
  Warnings:

  - Added the required column `country` to the `Join` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Join` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Join" ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL;
