import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const connection = await connectToDatabase();


    const [existingUser] = await connection.execute(
      "SELECT email FROM users WHERE email = ?",
      [email]
    );
    if (existingUser.length > 0) {
      await connection.end();
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }
  
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await connection.execute(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, hashedPassword]
    );

    await connection.end();
    return NextResponse.json({ message: "Registration successful" });

  } catch (error) {
    console.error("Error in registration:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
