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

    const response = NextResponse.json({ message: "Login successful", token: "JWT_TOKEN" });

    response.cookies.set("token", "JWT_TOKEN", { httpOnly: true, path: "/" });
    console.log("Token set in response cookies");

    return response;
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
