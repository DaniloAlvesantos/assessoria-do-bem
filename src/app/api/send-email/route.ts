import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  return NextResponse.json({ message: "Sucess", status: 200 });
}
