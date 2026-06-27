import { decimal, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import {
  paymentMethodEnum,
  subscriptionPaymentStatusEnum,
  subscriptionStatusEnum,
} from './enums';

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

export const subscriptionPayments = pgTable('subscription_payments', {
  id: uuid('id').primaryKey().defaultRandom(),
  amount: decimal('amount').notNull(),
  currency: text('currency').default('BRL').notNull(),
  method: paymentMethodEnum('method').notNull(),
  status: subscriptionPaymentStatusEnum('status').notNull(),
  transactionId: text('transaction_id').notNull(),
  attemptAt: timestamp('attempt_at').defaultNow().notNull(),
  paidAt: timestamp('paid_at'),
  statusReason: text('status_reason'),
  subscriptionId: uuid('subscription_id').notNull(),
  companyId: uuid('company_id').notNull(),

  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
