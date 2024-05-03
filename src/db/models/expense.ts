import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { users } from './user';

export const expenses = pgTable('expenses', {
	id: serial('id').primaryKey().notNull(),
	name: varchar('name', { length: 128 }).notNull(),
	description: text('description'),
	value: integer('value').default(0).notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
	userId: text('user_id')
		.notNull()
		.references(() => users.id)
});

export const expensesRelations = relations(expenses, ({ one }) => ({
	user: one(users, { fields: [expenses.userId], references: [users.id] })
}));

export type SelectExpenses = typeof expenses.$inferSelect;
export type InsertExpenses = typeof expenses.$inferSelect;
