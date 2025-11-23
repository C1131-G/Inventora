"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signout() {
    (await cookies()).set({
        name: "token",
        value: "",
        path: "/",
        httpOnly: true,
        maxAge: 0,
    });

    redirect("/");
}
