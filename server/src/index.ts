import express, { type Request, type Response } from 'express';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';
import { users } from './model/user';
import { eq } from 'drizzle-orm';

// DB stuff
const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite);

// add a password field later?
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

// Parse incoming JSON data.
app.use(express.json());

// TODO: Remove this later?
app.get('/', async (req: Request, res: Response) => {
  res.send('Hello, Bun!');
});


app.post('/login', async (req: Request, res: Response) => {
  // username and email are the same.
  let {username, password} = req.body;

  // Check if the username exists

  // Check if the password matches the existing username
  // Need to implement some form of password hashing later for security.

  // Return a token.

});

app.post('/register', async (req: Request, res: Response) => {
  let {username, password} = req.body;

  // Check if the user exists in the database

  // Insert the user into the database

});

app.delete('/delete', async (req: Request, res: Response) => {
  let {username, password} = req.body;

  // Check if the user exists in the database.

  // Check if the password matches the given user.

  // Delete the user from the database.

});


app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
