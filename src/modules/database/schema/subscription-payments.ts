import { decimal, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { paymentMethodEnum, subscriptionPaymentStatusEnum } from './enums';

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
