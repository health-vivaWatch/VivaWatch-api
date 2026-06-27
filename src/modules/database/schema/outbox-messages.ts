import { jsonb, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const outboxMessages = pgTable('outbox_messages', {
  id: uuid('id').primaryKey().defaultRandom(),
  topic: text('topic').notNull(),
  payload: jsonb('payload').notNull(),
  workerId: text('worker_id'),

  createdAt: timestamp('created_at').defaultNow().notNull(),
  processedAt: timestamp('processed_at'),
});
