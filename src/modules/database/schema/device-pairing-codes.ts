import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { devicePairingCodeStatusEnum } from './enums';

export const devicePairingCodes = pgTable('device_pairing_codes', {
  id: uuid('id').primaryKey().defaultRandom(),
  deviceIpAddress: text('device_ip_address').notNull(),
  deviceId: uuid('device_id').notNull(),
  status: devicePairingCodeStatusEnum('status').notNull(),
  code: text('code').notNull().unique(),

  createdAt: timestamp('created_at').defaultNow().notNull(),
  expiresAt: timestamp('expires_at').notNull(),
});
