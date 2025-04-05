export default async function handler(req, res) {
    if (req.method === "GET") {
      try {
        const [rows] = await db.query("SELECT password FROM users");
        res.status(200).json(rows);
      } catch (error) {
        res.status(500).json({ message: "Error fetching data", error });
      }
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  }