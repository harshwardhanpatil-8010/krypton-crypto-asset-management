"use server"
export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  
    const { amount, sourceChain, destChain } = req.body;
  
    if (!amount || !sourceChain || !destChain) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    try {
      const [result] = await db.query(
        "INSERT INTO transactions (amount, source_chain, dest_chain) VALUES (?, ?, ?)",
        [amount, sourceChain, destChain]
      );
      res.status(200).json({ message: "Transaction saved", transactionId: result.insertId });
    } catch (error) {
      res.status(500).json({ message: "Database error", error: error.message });
    }
  }