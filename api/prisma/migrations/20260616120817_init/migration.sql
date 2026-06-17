-- CreateTable
CREATE TABLE "Tache" (
    "id" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Tache_pkey" PRIMARY KEY ("id")
);
