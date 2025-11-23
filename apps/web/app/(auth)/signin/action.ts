"use server";

import {UserSigninSchema, zodError} from "@repo/validation";
import {userService} from "../../service/user.service";
import {signToken, verifyPassword} from "@repo/auth";
import {redirect} from "next/navigation";
import { cookies } from 'next/headers';


export async function signin(formdata:FormData){
    try{
        const data = {
            email : formdata.get("email"),
            password : formdata.get("password")
        }

        const validated = UserSigninSchema.safeParse(data);
        if (!validated.success){
            return zodError(validated.error);
        }

        const {email,password} = validated.data;

        const checkUser = await userService.getByEmail(email);
        if (!checkUser) {
            return {
                success: false,
                error: "Invalid email or account does not exist",
            };
        }

        const checkPassword = await verifyPassword(password,checkUser.password);
        if (!checkPassword) {
            return {
                success: false,
                error: "Invalid password",
            };
        }

        const token = await signToken({id:checkUser.id,email:checkUser.email});

        (await cookies()).set('auth_token', token, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
        });

        redirect("/dashboard");
    }catch (error){
        console.error("Signup error:", error);
        return {
            success: false,
            error: "Something went wrong. Please try again later.",
        };
    }
}