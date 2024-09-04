import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';
import { societies } from './society';
import { users } from './user';

export const forms = sqliteTable('forms', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  societyId: integer('society_id')
    .notNull()
    .references(() => societies.id, { onDelete: 'cascade' }),
  fields: text('fields', { mode: 'json' })
    .notNull()
    .$type<{ type: string; field: string }[]>(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
});

export const formSubmissions = sqliteTable('form_submissions', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  formId: integer('form_id')
    .notNull()
    .references(() => forms.id, { onDelete: 'cascade' }),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  answers: text('answers', { mode: 'json' }).notNull().$type<string[]>(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
});
