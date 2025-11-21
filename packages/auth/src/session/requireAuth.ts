import { verifyToken } from "../jwt/verify";

export function requireAuth(token: string | null) {
    if (!token) throw new Error("Unauthorized");

    const payload = verifyToken(token);
    if (!payload) throw new Error("Unauthorized");

    return payload;
}
