import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
	schema: [
		'./src/db/models/expense.ts',
		'./src/db/models/tag.ts',
		'./src/db/models/user.ts',
		'./src/db/models/session.ts'
	],
	out: './src/db/migrations',
	driver: 'pg',
	dbCredentials: {
		connectionString: process.env.DB_CONNECTION_STRING as string
	}
} satisfies Config;
