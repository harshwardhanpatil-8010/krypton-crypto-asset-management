import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "yourpassword",
      database: "yourdatabase",
    });

    const [rows] = await connection.execute(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );

    await connection.end();

    if (rows.length === 0) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful", token: "JWT_TOKEN" });
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
