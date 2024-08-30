// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const registrationTable = sqliteTable('registration', {
  id: integer("id").primaryKey(),
  fullName: text('fullName').notNull(),
  phoneNumber: text('phoneNumber').notNull().unique(),
  email: text('email').notNull().unique(),
  school: text('school').notNull(),
  schoolSubject: text('schoolSubject').notNull(),
  reportScore: integer('reportScore').notNull(),
  graduationYear: integer('graduationYear').notNull(),
  studyProgram: text('studyProgram').notNull(),
  referalCode: text('referalCode'),
  isPaymentConfirmed: integer('isPaymentConfirmed').notNull().default(0), // This acts as a boolean
  createdAt: integer("createdAt", { mode: "timestamp" }),
});
