import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

/**
 * Cliente Drizzle (Postgres/Supabase).
 * `db` é `null` enquanto DATABASE_URL não estiver definida (modo demo).
 * A partir do M1, as queries só rodam quando o banco estiver configurado.
 */
const connectionString = process.env.DATABASE_URL;

const client = connectionString
  ? postgres(connectionString, { prepare: false })
  : null;

export const db = client ? drizzle(client, { schema }) : null;
