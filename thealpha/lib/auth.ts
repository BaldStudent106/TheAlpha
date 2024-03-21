"use server";
import { authenticateUserFromDatabase } from "./prisma";
import { createNewUserDatabaseORM } from "./prisma";
import { cookies } from "next/headers";
import { bcryptWrapper } from "lib/actions";
import { RedirectType, redirect } from "next/navigation";
const bcrypt = require("bcryptjs");

export async function createNewUser(
  formdata: FormData,
  date: Date = new Date()
) {
  const email = formdata.get("email")?.toString();
  const password = formdata.get("password")?.toString();
  if (typeof email === "string" && typeof password === "string") {
    const hashedPassword = await bcryptWrapper(password);
    const writableDate: string = date.toISOString();
    const sessionid = await bcryptWrapper(
      email + password + writableDate + process.env.SESSION_PRIVATE_KEY,
    );
    cookies().set("sessionID", sessionid, {
      expires: new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000),
    });
    createNewUserDatabaseORM(email, hashedPassword, sessionid);
  }
}

export async function authenticateUser(formdata: FormData): Promise<void> {
  const email = formdata.get("email")?.toString();
  const password = formdata.get("password")?.toString();
  let passed: boolean;
  if (typeof email === "string" && typeof password === "string") {
    passed = await authenticateUserFromDatabase(email, password);
    if (passed) {
      redirect("/", RedirectType.push);
    }
  }
}
