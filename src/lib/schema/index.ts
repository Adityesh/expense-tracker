import { z } from 'zod';
import { regexStrings } from '$lib/constants';

export const LoginSchema = z.object({
	username: z.string().trim(),
	password: z
		.string()
		.min(8, { message: 'Password too short' })
		.max(20, { message: 'Password too long' })
		.regex(regexStrings.PASSWORD, { message: 'Password is not valid' })
});

export type LoginType = z.infer<typeof LoginSchema>

export const SignupSchema = z.object({
	name: z.string().trim(),
	username: z.string().trim(),
	password: z
		.string()
		.min(8, { message: 'Password too short' })
		.max(20, { message: 'Password too long' })
		.regex(regexStrings.PASSWORD, { message: 'Password is not valid' })
});

export type SignupType = z.infer<typeof SignupSchema>;
