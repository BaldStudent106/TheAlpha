import { authenticateSessionIDFromDatabase } from "lib/prisma";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
  const target = await request.json();
  const result = await authenticateSessionIDFromDatabase(target);
  return Response.json(result);
}
