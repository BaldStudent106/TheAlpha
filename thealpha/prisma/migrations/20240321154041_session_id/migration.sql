/*
  Warnings:

  - A unique constraint covering the columns `[sessionid]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_sessionid_key" ON "User"("sessionid");
