import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const connection = await connectToDatabase();

    const [rows] = await connection.execute(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );

    await connection.end();

    if (rows.length === 0) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful", token: process.env.JWT_TOKEN });
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
