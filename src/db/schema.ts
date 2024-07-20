import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";

export const countries = sqliteTable('countries', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name', { length: 256 }),
});
export const cities = sqliteTable('cities', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name', { length: 256 }),
  countryId: text('country_id').references(() => countries.id),
});