import {
  decimal,
  integer,
  pgTable,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

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
