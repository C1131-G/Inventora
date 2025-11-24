import {cookies} from "next/headers";

export async function setAuthCookie(token: string) {
    const cookieStore = await cookies();
    cookieStore.set({
        name: "token",
        value: token,
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24,
    });
}

export async function clearAuthCookie() {
    const cookieStore = await cookies();
    cookieStore.set({
        name: "token",
        value: "",
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 0,
    });
}


export async function getTokenFromCookies(): Promise<string | null> {
    const cookieStore = await cookies();
    return cookieStore.get("token")?.value ?? null;
}

