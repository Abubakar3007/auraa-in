/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Join` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "joinId" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Join_email_key" ON "Join"("email");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_joinId_fkey" FOREIGN KEY ("joinId") REFERENCES "Join"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
