import {cookies} from "next/headers";
import {JWTPayload, verifyToken} from "@repo/auth";

export async function getSession():Promise<JWTPayload> {
    const token = (await cookies()).get("token")?.value;
    if (!token) throw new Error("Unauthorized");

    const payload = await verifyToken(token);
    if (!payload) throw new Error("Unauthorized");

    return payload;
}
