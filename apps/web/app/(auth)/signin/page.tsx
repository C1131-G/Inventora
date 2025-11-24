"use client";

import { useState, useTransition } from "react";
import { signin } from "./action";

export default function SigninPage() {
    const [pending, startTransition] = useTransition();
    const [error, setError] = useState<string | null>(null);

    function handleSubmit(formData: FormData) {
        setError(null);
        startTransition(async () => {
            const res = await signin(formData);
            // redirect() never returns, so this only runs on errors
            if (res && !res.success) {
                setError(res.error);
            }
        });
    }

    return (
        <main className="min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white shadow p-8 rounded">
                <h1 className="text-xl font-semibold mb-6">Sign In</h1>

                {error && (
                    <p className="mb-4 text-red-600 text-sm">
                        {error}
                    </p>
                )}

                <form action={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium">Email</label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium">Password</label>
                        <input
                            name="password"
                            type="password"
                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={pending}
                        className="w-full bg-black text-white py-2 rounded disabled:opacity-60"
                    >
                        {pending ? "Signing in..." : "Sign In"}
                    </button>
                </form>
            </div>
        </main>
    );
}
