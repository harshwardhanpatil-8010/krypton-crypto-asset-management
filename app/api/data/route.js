import { connectToDatabase } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const db = await connectToDatabase();
  try {
    const [emails] = await db.query("SELECT email FROM users");
    const [userIds] = await db.query("SELECT user_id FROM users");

    return NextResponse.json({
      emails,
      userIds
    });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { message: "Error fetching data", error: error.message },
      { status: 500 }
    );
  }
}
