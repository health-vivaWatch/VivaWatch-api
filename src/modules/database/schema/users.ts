import { boolean, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { userRoleEnum } from './enums';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  role: userRoleEnum('role').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  isActive: boolean('is_active').notNull().default(true),
  companyId: uuid('company_id'),

  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

/*
  'SYSTEM_ADMIN', // quais propriedades especiais esse cara tem?
  'COMPANY_ADMIN',  // quais propriedades especiais esse cara tem?
  'COMPANY_OWNER', // quais propriedades especiais esse cara tem?
  'CAREGIVER', // quais propiedades especiais esse cara tem?

  Por que não ter uma tabela para cada um ? Quais os trade-offs?
*/
