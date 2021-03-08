/*
  Warnings:

  - Added the required column `partyRef` to the `party_assoc` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "party_assoc" ADD COLUMN     "partyRef" TEXT NOT NULL,
ADD COLUMN     "partyParty_ref" TEXT;

-- AddForeignKey
ALTER TABLE "party_assoc" ADD FOREIGN KEY("partyRef")REFERENCES "party"("party_ref") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "party_assoc" ADD FOREIGN KEY("partyParty_ref")REFERENCES "party"("party_ref") ON DELETE SET NULL ON UPDATE CASCADE;
