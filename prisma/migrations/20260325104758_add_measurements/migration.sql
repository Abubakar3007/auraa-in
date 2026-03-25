-- CreateTable
CREATE TABLE "Measurements" (
    "id" TEXT NOT NULL,
    "bust" TEXT NOT NULL,
    "waist" TEXT NOT NULL,
    "hip" TEXT NOT NULL,
    "shoes" TEXT NOT NULL,
    "hair" TEXT NOT NULL,
    "eyes" TEXT NOT NULL,
    "joinId" TEXT NOT NULL,

    CONSTRAINT "Measurements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Measurements_joinId_key" ON "Measurements"("joinId");

-- AddForeignKey
ALTER TABLE "Measurements" ADD CONSTRAINT "Measurements_joinId_fkey" FOREIGN KEY ("joinId") REFERENCES "Join"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
