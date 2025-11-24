import { requireAuth } from "./require-auth";

export async function authGuard<T>(handler: (userId: string) => Promise<T>) {
    const payload = await requireAuth();
    return handler(payload.id);
}
