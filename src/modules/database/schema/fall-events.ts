import {
  boolean,
  decimal,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

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
