import { relations } from 'drizzle-orm';
import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { users } from './user';

export const tags = pgTable('tags', {
	id: serial('id').primaryKey().notNull(),
	name: varchar('name', { length: 128 }).notNull(),
	icon: varchar('icon').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
	userId: text('user_id')
		.notNull()
		.references(() => users.id)
});

export const tagsRelations = relations(tags, ({ one }) => ({
	user: one(users, { fields: [tags.userId], references: [users.id] })
}));

export type SelectTag = typeof tags.$inferSelect;
export type InsertTag = typeof tags.$inferSelect;
