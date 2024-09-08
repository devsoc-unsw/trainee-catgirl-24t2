import { sql } from 'drizzle-orm';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { users } from './user';

export const societies = sqliteTable('societies', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
});

export const MEMBER = 0;
export const EXECUTIVE = MEMBER + 1;
export const PRESIDENT = EXECUTIVE + 1;

export const involvements = sqliteTable('involvements', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  societyId: integer('society_id')
    .notNull()
    .references(() => societies.id, { onDelete: 'cascade' }),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  position: integer('position').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
});
