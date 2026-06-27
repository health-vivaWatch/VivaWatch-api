import {
  boolean,
  decimal,
  integer,
  jsonb,
  pgTable,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';
import { activityLevelEnum } from './enums';

export const measurements = pgTable('measurements', {
  id: uuid('id').primaryKey().defaultRandom(),
  companyId: uuid('company_id').notNull(),
  deviceId: uuid('device_id').notNull(),
  patientId: uuid('patient_id').notNull(),

  beatsPerMinute: integer('beats_per_minute').notNull(),
  peripheralOxygenSaturation: decimal('peripheral_oxygen_saturation').notNull(),
  respirationRate: integer('respiration_rate').notNull(),
  skinTemperature: decimal('skin_temperature').notNull(),
  heartRateVariability: decimal('heart_rate_variability').notNull(),

  fallDetected: boolean('fall_detected').notNull(),
  activityLevel: activityLevelEnum('activity_level').notNull(),
  stepsCount: integer('steps_count').notNull(),

  rawData: jsonb('raw_data').notNull(),
  riskScore: integer('risk_score').notNull(),

  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
