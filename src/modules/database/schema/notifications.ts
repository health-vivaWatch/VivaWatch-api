import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import {
  notificationChannelEnum,
  notificationStatusEnum,
  notificationTypeEnum,
} from './enums';

export const notifications = pgTable('notifications', {
  id: uuid('id').primaryKey().defaultRandom(),
  type: notificationTypeEnum('type').notNull(),
  status: notificationStatusEnum('notification_status')
    .default('PENDING')
    .notNull(),
  channel: notificationChannelEnum('notification_channel')
    .default('DASHBOARD')
    .notNull(),
  message: text('message').notNull(),
  deviceId: uuid('device_id').notNull(),
  caregiverId: uuid('caregiver_id').notNull(),
  companyId: uuid('company_id').notNull(),

  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
