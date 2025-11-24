"use server";

import {userService} from "../../service/user.service";
import {UserSignupSchema} from "@repo/validation";
import {hashPassword} from "@repo/auth";

import {redirect} from "next/navigation";

export async function signup(formdata : FormData) {
    try {
        const data = {
            email: formdata.get("email"),
            password: formdata.get("password"),
            name: formdata.get("name")
        }

        const validated = UserSignupSchema.safeParse(data);
        if (!validated.success) {
            return {
                success: false,
                error: "validation failed",
            };
        }

        const {email, password, name} = validated.data;

        const checkUser = await userService.getByEmail(email);
        if (checkUser) {
            return {
                success: false,
                error: "User already exists try login!",
            };
        }

        const hashedPassword = await hashPassword(password);

        await userService.create({
            email: email,
            password: hashedPassword,
            name: name
        })
    }catch (error){
        console.error("Signup error:", error);
        return {
            success: false,
            error: "Something went wrong. Please try again later.",
        };
    }
    redirect("/signin");
}