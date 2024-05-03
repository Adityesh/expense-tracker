import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '$env/dynamic/private';
import { schema } from './models';

// for query purposes
const queryClient = postgres(env.DB_CONNECTION_STRING as string);
const db = drizzle(queryClient, {
    schema : schema
});
export { db };
