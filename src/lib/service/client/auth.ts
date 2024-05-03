import { AUTH } from "$lib/constants/url";
import type { LoginType, SignupType } from "$lib/schema";


export const loginUser = async (payload : LoginType) => {
    try {
        const response = await fetch(AUTH.LOGIN, {
            body : JSON.stringify(payload),
            method : "POST"
        });

        return Promise.resolve(response);
    } catch(error) {
        return Promise.reject(error);
    }
}

export const signupUser = async (payload : SignupType) => {
    try {
        return await Promise.resolve(fetch(AUTH.SIGNUP, {
            body : JSON.stringify(payload),
            method : "POST"
        }))
    } catch (error) {
        return Promise.reject(error);
    }
}