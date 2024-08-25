import { Database } from 'bun:sqlite';
import { drizzle } from 'drizzle-orm/bun-sqlite';

const sqlite = new Database('sqlite.db');
export const db = drizzle(sqlite);

if (import.meta.main) {
  // File is run directly
  // Create DB tables

  sqlite.run(
    `create table users (
      id integer primary key autoincrement,
      name text not null,
      email text not null unique,
      age integer,
      password text not null,
      created_at integer timestamp default (strftime('%s', 'now'))
    )`
  );
}
