import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from "@libsql/client";

import * as schema from './schema';

const sqlite = createClient({
  url: 'file:sqlite.db',
});
const db = drizzle(sqlite, { schema });

export default db;