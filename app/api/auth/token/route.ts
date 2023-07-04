import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const secret = "6ae0SZ76aD/6zc3m9f2v9gKCuHTCW5n75RSS8DwmJI4="

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret, raw: true });

  return NextResponse.json({ token }, { status: 200 });
}
