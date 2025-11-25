import { getSession } from "./get-session";
import { redirect } from "next/navigation";

export async function requireAuth() {
    try {
        return await getSession();
    } catch {
        redirect("/signin");
    }
}
