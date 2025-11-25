import {JWTPayload, verifyToken} from "@repo/auth";
import {getTokenFromCookies} from "./cookie";

export async function getSession():Promise<JWTPayload> {
   const token =  await getTokenFromCookies();
    if (!token) throw new Error("Unauthorized");

    const payload = await verifyToken(token);
    if (!payload) throw new Error("Unauthorized");

    return payload;
}
