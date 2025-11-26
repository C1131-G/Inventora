"use server";

import { UserSigninSchema } from "@repo/validation";
import { userService } from "../_service/user.service";
import { signToken, verifyPassword } from "@repo/auth";
import { redirect } from "next/navigation";
import { setAuthCookie } from "../../_utils/auth/cookie";

export async function signin(formdata: FormData) {
  try {
    const data = {
      email: formdata.get("email"),
      password: formdata.get("password"),
    };

    const validated = UserSigninSchema.safeParse(data);
    if (!validated.success) {
      return {
        success: false,
        error: "validation failed",
      };
    }

    const { email, password } = validated.data;

    const checkUser = await userService.getByEmail(email);
    if (!checkUser) {
      return {
        success: false,
        error: "Invalid email or account does not exist",
      };
    }

    const checkPassword = await verifyPassword(password, checkUser.password);
    if (!checkPassword) {
      return {
        success: false,
        error: "Invalid password",
      };
    }

    const token = await signToken({ id: checkUser.id, email: checkUser.email });

    await setAuthCookie(token);
  } catch (error) {
    console.error("Signin error:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }
  redirect("/dashboard");
}
