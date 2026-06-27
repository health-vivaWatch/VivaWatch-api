import {
  boolean,
  decimal,
  integer,
  pgTable,
  text,
  uuid,
} from 'drizzle-orm/pg-core';
export type { Column } from 'drizzle-orm';

export const patientHealthBaselines = pgTable('patient_health_baseline', {
  id: uuid('id').primaryKey().defaultRandom(),
  beatsPerMinuteMinimumNormal: integer(
    'beats_per_minute_minimum_normal',
  ).notNull(),
  beatsPerMinuteMaximumNormal: integer(
    'beats_per_minute_maximum_normal',
  ).notNull(),
  peripheralOxygenSaturationMinimumNormal: decimal(
    'peripheral_oxygen_saturation_minimum_normal',
  ).notNull(),
  heartRateVariabilityBaseline: decimal(
    'heart_rate_variability_baseline',
  ).notNull(),
  hasHyperTension: boolean('has_hyper_tension').default(false).notNull(),
  hasDiabetes: boolean('has_diabetes').default(false).notNull(),
  hasHeartCondition: boolean('has_heart_condition').default(false).notNull(),
  medications: text('medications').array().notNull(),
  patientId: uuid('patient_id').notNull(),
  companyId: uuid('company_id').notNull(),
});
