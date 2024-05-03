import type { HttpError } from "@sveltejs/kit"

export function generateSuccessApiResponse<T>(
	data: T,
	status: HttpError["status"] = 200,
	message: string = 'Success'
) {
    return {
        data,
        status,
        message,
        error : false
    } satisfies ApiResponse<T>
}

export function generateErrorApiResponse<T>(
    data : T,
    status : HttpError["status"] = 400,
    message : string = "Error",
) {
    return {
        data,
        error : true,
        status,
        message
    } satisfies ApiResponse<T>
}
