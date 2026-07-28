/*
  Warnings:

  - Added the required column `utilisateurId` to the `Tache` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tache" ADD COLUMN     "utilisateurId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Tache" ADD CONSTRAINT "Tache_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
