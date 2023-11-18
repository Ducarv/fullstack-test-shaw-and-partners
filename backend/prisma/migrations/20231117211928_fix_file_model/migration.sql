/*
  Warnings:

  - You are about to drop the column `content` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `filename` on the `File` table. All the data in the column will be lost.
  - Added the required column `buffer` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fieldname` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originalname` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_File" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fieldname" TEXT NOT NULL,
    "originalname" TEXT NOT NULL,
    "encoding" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "buffer" BLOB NOT NULL,
    "size" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_File" ("createdAt", "encoding", "id", "mimetype", "updatedAt") SELECT "createdAt", "encoding", "id", "mimetype", "updatedAt" FROM "File";
DROP TABLE "File";
ALTER TABLE "new_File" RENAME TO "File";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
