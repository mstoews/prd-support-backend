/*
  Warnings:

  - Made the column `version_date` on table `party` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "party" ALTER COLUMN "version_date" SET NOT NULL,
ALTER COLUMN "version_date" SET DEFAULT CURRENT_TIMESTAMP;
