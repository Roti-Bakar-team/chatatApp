import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { number, message } = await req.json();

    const pesan = await prisma.pesan.create({
      data: {
        nomor: number,
        pesan: message,
      },
    });

    return NextResponse.json(
      {
        message: "Successfully",
        data: pesan,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error: String(error) },
      { status: 500 }
    );
  }
}
