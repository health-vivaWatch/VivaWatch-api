import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const planBenefits = pgTable('plan_benefits', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  planId: uuid('plan_id').notNull(),

  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
