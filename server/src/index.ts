import express, { type Request, type Response } from 'express';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';
import { users } from './model/user';
import { eq } from 'drizzle-orm';

// DB stuff
const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite);
sqlite.run(`create table users (
  id integer primary key autoincrement,
  name text not null,
  email text not null unique,
  age integer,
  created_at integer timestamp default (strftime('%s', 'now'))
)`);
await db.insert(users).values({
  name: 'John Doe',
  email: 'johndoe@example.com',
  age: 30,
});
await db
  .update(users)
  .set({ name: 'Mr. John Doe' })
  .where(eq(users.name, 'John Doe'));
console.log(db.select().from(users).all());

// Server stuff
const app = express();
const port = 3000;

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello, Bun!');
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
