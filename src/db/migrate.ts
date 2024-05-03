import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
	try {
		const sql = postgres(process.env.DB_CONNECTION_STRING as string, {
			max: 1,
		});
		const db = drizzle(sql);
		await migrate(db, { migrationsFolder: './src/db/migrations' });
		await sql.end();
		console.log('Migrations successful');
	} catch (error) {
		console.log(error);
	}
}

main();
