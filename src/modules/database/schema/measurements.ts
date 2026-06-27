import {
  boolean,
  decimal,
  integer,
  jsonb,
  pgTable,
  text,
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

export const fallEvents = pgTable('fall_events', {
  id: uuid('id').primaryKey().defaultRandom(),
  impactIntensity: decimal('impact_intensity').notNull(),
  bodyPosition: text('body_position').notNull(),
  confirmed: boolean('confirmed').notNull(),
  responseTimeInMiliSeconds: integer('response_time_in_miliseconds').notNull(),
  measurementId: uuid('measurement_id').notNull(),
  patientId: uuid('patient_id').notNull(),
  companyId: uuid('company_id').notNull(),

  confirmedAt: timestamp('confirmed_at').notNull(),
  createdAt: timestamp('created_at').notNull(),
});

export const sleepSessions = pgTable('sleep_sessions', {
  id: uuid('id').primaryKey().defaultRandom(),
  interruptions: integer('interruptions').notNull(),
  durationMinutes: integer('duration_minutes').notNull(),
  averageBeatsPerMinute: decimal('average_beats_per_minute').notNull(),
  averagePeriPheralOxygenSaturation: decimal(
    'average_peripheral_saturation',
  ).notNull(),
  averageHeartVariability: decimal('average_heart_variability').notNull(),
  patientId: uuid('patient_id').notNull(),
  deviceId: uuid('device_id').notNull(),
  companyId: uuid('company_id').notNull(),

  startedAt: timestamp('started_at').defaultNow().notNull(),
  endedAt: timestamp('ended_at').notNull(),
});
