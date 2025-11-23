import { getSession } from "./get-session";
import { redirect } from "next/navigation";

export async function requireAuth() {
    const session = await getSession();

    if (!session) {
        redirect("/");
    }

    return session;
}
