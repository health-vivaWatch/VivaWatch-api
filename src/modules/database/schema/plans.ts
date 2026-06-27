import {
  boolean,
  doublePrecision,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';
import { planIntervalEnum } from './enums';

export const plans = pgTable('plans', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull().unique(),
  price: doublePrecision('price').notNull(),
  period: planIntervalEnum('period').notNull(),
  isSelfService: boolean('is_self_service').default(false).notNull(),
  isEnterprise: boolean('is_enterprise').default(false).notNull(),
  isMain: boolean('is_main').default(false).notNull(),
  isActive: boolean('is_active').notNull(),

  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
