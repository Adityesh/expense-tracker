import { LoginSchema, SignupSchema } from '$lib/schema';
import { lucia } from '$lib/server/auth';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';
import { db } from '../db';
import { generateId } from 'lucia';
import { users } from '../db/models/user';

export const actions = {
	login: async ({ request, cookies }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');
		const { success, data } = await LoginSchema.safeParseAsync({ username, password });
		if (!success) {
			return fail(400, { message: 'Validation failed' });
		}

		const { username: name, password: pass } = data;
		// Check if user name is present in the db or not
		// Check if the password is correct or not
		const user = await db.query.users.findFirst({
			where({ username }, { eq }) {
				return eq(username, name);
			}
		});

		if (!user) {
			return fail(404, { message: 'User not found ' });
		}

		const argon2id = new Argon2id();
		const isValid = await argon2id.verify(user.password, pass);

		if (!isValid) {
			return fail(403, { message: 'Incorrect password' });
		}

		const session = await lucia.createSession(user.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		cookies.set('Set-Cookie', sessionCookie.serialize(), { path: '/' });
		return redirect(302, '/home');
	},
	signup: async ({ request, cookies }) => {
		const form = await request.formData();
		const formUsername = form.get('username');
		const formName = form.get('name');
		const formPassword = form.get('password');
		const { success, data } = await SignupSchema.safeParseAsync({
			username: formUsername,
			name: formName,
			password: formPassword
		});
		if (!success) {
			return fail(400, { message: 'Bad Request' });
		}
		// Check if the username is taken already or not
		// Check if the password is correct
		const user = await db.query.users.findFirst({
			where: ({ username }, { eq }) => {
				return eq(username, data.username);
			}
		});

		if (user) {
			return fail(400, {
				message: 'Username already taken'
			});
		}

		// No user, new user to be created
		const argon2id = new Argon2id();
		const hashedPassword = await argon2id.hash(data.password);
		const userId = generateId(10) as string;
		await db.insert(users).values({
			id: userId,
			name: data.name,
			username: data.username,
			password: hashedPassword
		});

		const session = await lucia.createSession(userId, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		cookies.set('Set-Cookie', sessionCookie.serialize(), { path: '/' });
		return redirect(302, '/home');
	}
} satisfies Actions;
