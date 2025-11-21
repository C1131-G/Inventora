import jwt from "jsonwebtoken";
import {JWTPayload} from "../types/session";

const JWT_SECRET = process.env.JWT_SECRET!;
if (!JWT_SECRET) throw new Error("JWT_SECRET missing in environment");

export async function signToken(payload:JWTPayload){
    return jwt.sign(payload,JWT_SECRET,{expiresIn:"1d"})
}