"use server";

import { redirect } from "next/navigation";
import {clearAuthCookie} from "../../utils/auth/cookie";

export async function signout() {
    await clearAuthCookie();
    redirect("/");
}
