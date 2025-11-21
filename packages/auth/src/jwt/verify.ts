import jwt from "jsonwebtoken";
import {JWTPayload} from "../types/session";

const JWT_SECRET = process.env.JWT_SECRET!;
if (!JWT_SECRET) throw new Error("JWT_SECRET missing in environment");

export async function verifyToken(token:string){
    try{
        return jwt.verify(token, JWT_SECRET) as JWTPayload;
    }catch{
        return null;
    }
}