"use client";

import { useState, useTransition } from "react";
import { userSignin } from "./_actions/user-signin";

export default function SigninPage() {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(formData: FormData) {
    setError(null);
    startTransition(async () => {
      const res = await userSignin(formData);
      if (res && !res.success) {
        setError(res.error);
      }
    });
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg border shadow">
        <h1 className="text-xl font-semibold text-center mb-4">Sign In</h1>

        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}

        <form action={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full border p-2 rounded focus:ring-2 "
          />

          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="w-full border p-2 rounded focus:ring-2 "
          />

          <button
            type="submit"
            disabled={pending}
            className="w-full bg-purple-500 text-white py-2 rounded hover:cursor-pointer hover:bg-purple-600 disabled:opacity-60"
          >
            {pending ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}
