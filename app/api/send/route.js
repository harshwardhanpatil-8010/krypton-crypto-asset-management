import { connectToDatabase } from "@/lib/db";
import { cookies } from "next/headers";

import { NextResponse } from 'next/server';

export async function POST(req){
    const cookieStore = cookies();
    const userId = cookieStore.get("userId")?.value;
    if(userId){
        return NextResponse.json({message: "Unauthorized User"}, {status: 401})
    }
    try{
        const {recipient, amount, network, token} = await req.json;
        if(!recipient || !amount || !network || !token){
            return NextResponse.json({message: "Invalid Data"}, {status: 400})
        }
        const db = await connectToDatabase();
        const [result] = await db.execute(
            `insert INSERT INTO transactions (user_id, type, recipient, amount, network, token, status, timestamp)
       VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`,[
        userId,
        "send",
        recipient,
        amount,
        network,
        token,
        "pending"
       ]
        );
        await db.end();
        return NextResponse.json({message: "Data sent successfully", transactionId: result.insertId}, {status: 200})
    }


    catch(error){
        return NextResponse.json({message: "Error sending data", error: error.message}, {status: 500})
    }

}

