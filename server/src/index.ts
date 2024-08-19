import express, { type Request, type Response } from "express";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

const app = express();
const port = 3000;

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello, Bun!");
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
