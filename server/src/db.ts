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

  sqlite.run(
    `create table societies (
      id integer primary key autoincrement,
      name text not null,
      created_at integer timestamp default (strftime('%s', 'now'))
    )`
  );

  sqlite.run(
    `create table involvements (
      id integer primary key autoincrement,
      society_id integer not null references TODO,
      user_id integer not null references TODO,
      position integer not null,
      created_at integer timestamp default (strftime('%s', 'now'))
    )`
  );

  sqlite.run(
    `create table forms (
      id integer primary key autoincrement,
      title text not null,
      society_id not null references TODO,
      fields text json not null,
      created_at integer timestamp default (strftime('%s', 'now'))
    )`
  );

  sqlite.run(
    `create table form_submissions (
      id integer primary key autoincrement,
      form_id integer not null references TODO,
      user_id integer not null references TODO,
      answers text json not null,
      created_at integer timestamp default (strftime('%s', 'now'))
    )`
  );

  sqlite.run(
    `create table autofills (
      id integer primary key autoincrement,
      user_id integer not null references TODO,
      field text not null,
      value text not null,
      created_at integer timestamp default (strftime('%s', 'now'))
    )`
  );
}
