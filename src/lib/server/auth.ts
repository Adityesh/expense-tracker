import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle';
import { db } from '../../db';
import { sessions } from '../../db/models/session';
import { users } from '../../db/models/user';
import { Lucia } from 'lucia';
import { dev } from '$app/environment';

export const adapter = new DrizzlePostgreSQLAdapter(db, sessions, users);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: !dev
		}
	},
	getUserAttributes: (attributes) => {
		return {
			// attributes has the type of DatabaseUserAttributes
			username: attributes.username,
            name : attributes.name
		};
	}
});
