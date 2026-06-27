import {
  decimal,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';
import {
  devicePairingCodeStatusEnum,
  deviceStatusEnum,
  pairingStatusEnum,
} from './enums';

export const devices = pgTable('devices', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  serialNumber: text('serial_number').notNull().unique(),
  status: deviceStatusEnum('status').notNull(),
  pairingStatus: pairingStatusEnum('pairing_status').notNull(),
  latitude: decimal('latitude').notNull(),
  longitude: decimal('longitude').notNull(),
  locationAccuracy: integer('location_accuracy').notNull(),
  batteryLevel: decimal('battery_level').notNull(),
  signalQuality: integer('signal_quality').notNull(),
  patientId: uuid('patient_id').unique(),
  currentPairingCodeId: uuid('current_pairing_code_id').unique(),
  companyId: uuid('company_id').notNull(),
  pairedAt: timestamp('paired_at'),

  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const devicePairingCodes = pgTable('device_pairing_codes', {
  id: uuid('id').primaryKey().defaultRandom(),
  deviceIpAddress: text('device_ip_address').notNull(),
  deviceId: uuid('device_id').notNull(),
  status: devicePairingCodeStatusEnum('status').notNull(),
  code: text('code').notNull().unique(),

  createdAt: timestamp('created_at').defaultNow().notNull(),
  expiresAt: timestamp('expires_at').notNull(),
});
