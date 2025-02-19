import mysql from "mysql2/promise";

export const db = await mysql.createConnection({
  host: "localhost", // Change if using a remote DB
  user: "root", // Change to your MySQL user
  password: "Test@123",
  database: "Krypton",
});
