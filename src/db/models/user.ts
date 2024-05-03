import { relations } from 'drizzle-orm';
import { pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { expenses } from './expense';
import { tags } from './tag';

export const users = pgTable('users', {
	id: text("id").primaryKey().notNull(),
	name: varchar('name', { length: 128 }).notNull(),
	username : text("username").unique().notNull(),
	password: varchar('password').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull()
});

export const usersRelations = relations(users, ({ many }) => ({
	expenses: many(expenses),
	tags: many(tags)
}));

export type SelectUsers = typeof users.$inferSelect;
export type InsertUsers = typeof users.$inferSelect;