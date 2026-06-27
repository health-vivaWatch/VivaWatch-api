import { pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';
import { subscriptionStatusEnum } from './enums';

export const subscriptions = pgTable('subscription', {
  id: uuid('id').primaryKey().defaultRandom(),
  status: subscriptionStatusEnum('status').notNull(),
  startAt: timestamp('start_at').defaultNow().notNull(),
  periodEndDate: timestamp('period_end_date').notNull(),
  renewAt: timestamp('renew_at'),
  cancelAt: timestamp('cancel_at'),
  cancelationRequestedAt: timestamp('cancelation_requested_at'),
  planId: uuid('plan_id').notNull(),
  companyId: uuid('company_id').notNull(),

  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
