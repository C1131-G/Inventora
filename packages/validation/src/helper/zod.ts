import {ZodError} from "zod";
import {Failure, Success} from "./response";

export function zodSuccess<T>(data: T): Success<T> {
    return {
        success: true,
        data,
    };
}

export function zodError(error: ZodError): Failure {
    return {
        success: false,
        error: error,
    };
}