import { connectToDatabase } from "@/lib/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const cookieStore = cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized User" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { recipient, amount, network, crypto } = body;

    if (!recipient || !amount || !network || !crypto) {
      return NextResponse.json({ message: "Invalid Data" }, { status: 400 });
    }

    const db = await connectToDatabase();

    const [senderRows] = await db.execute(
      "SELECT wallet_id, private_key, balance FROM wallets WHERE user_id = ?",
      [userId]
    );

    if (senderRows.length === 0) {
      await db.end();
      return NextResponse.json({ message: "Sender wallet not found" }, { status: 404 });
    }

    const senderWallet = senderRows[0];

    const [recipientRows] = await db.execute(
      "SELECT wallet_id, public_key FROM wallets WHERE public_key = ?",
      [recipient]
    );

    if (recipientRows.length === 0) {
      await db.end();
      return NextResponse.json({ message: "Recipient wallet not found" }, { status: 404 });
    }

    const recipientWallet = recipientRows[0];

    if (senderWallet.balance < parseFloat(amount)) {
      await db.end();
      return NextResponse.json({ message: "Insufficient balance" }, { status: 400 });
    }

    await db.beginTransaction();

    await db.execute(
      "UPDATE wallets SET balance = balance - ? WHERE private_key = ?",
      [amount, senderWallet.private_key]
    );

    await db.execute(
      "UPDATE wallets SET balance = balance + ? WHERE public_key = ?",
      [amount, recipientWallet.public_key]
    );

    const [txResult] = await db.execute(
      `INSERT INTO transactions 
       (user_id, amount, sender_wallet_id, recipient_wallet_id, network, crypto) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        userId,
        amount,
        senderWallet.private_key,
        recipientWallet.public_key,
        network,
        crypto,
      ]
    );

    await db.commit();
    await db.end();

    console.log("Transaction success:", { recipient, amount, network, crypto });
    return NextResponse.json(
      {
        message: "Transaction successful",
        transactionId: txResult.insertId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Transaction error:", error);
    return NextResponse.json(
      { message: "Transaction failed", error: error.message },
      { status: 500 }
    );
  }
}
