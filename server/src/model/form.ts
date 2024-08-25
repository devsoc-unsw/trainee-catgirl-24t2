import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { users } from './user';
import { sql } from 'drizzle-orm';

export const forms = sqliteTable('forms', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
  fields: text('fields', { mode: 'json' }).$type<
    { type: string; value: string }[]
  >(),
});
