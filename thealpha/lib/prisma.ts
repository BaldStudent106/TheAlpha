import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { bcryptCompare } from "./actions";

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export async function createNewUserDatabaseORM(
  email: string,
  password: string,
  sessionid: string
):Promise<void>{
  const user = await prisma.user.create({
    data: {
      email: email,
      password: password,
      sessionid: sessionid,
    },
  });
}

export async function authenticateUserFromDatabase(
  email: string,
  password: string
): Promise<boolean> {
  const getUser = await prisma.user.findUnique({ where: { email: email } });
  if (getUser?.password) {
    if (bcryptCompare(password, getUser?.password)) {
      return true;
    }
  }
  return false;
}

export async function authenticateSessionIDFromDatabase(
  sessionID: string
): Promise<boolean> {
  const getUser = await prisma.user.findUnique({where : {sessionid:sessionID}})
  if (getUser?.sessionid) {
    return true;
  }
  return false;
}
