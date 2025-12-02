"use client";

import { userSignout } from "../_actions/user-signout";
import { LogOut } from "lucide-react";
import { useTransition } from "react";

export function SignoutButtonClient() {
  const [isPending, startTransition] = useTransition();

  const handleSignout = () => {
    startTransition(async () => {
      await userSignout();
    });
  };

  return (
    <button
      type="button"
      onClick={handleSignout}
      disabled={isPending}
      className={`
        w-full flex items-center gap-3 rounded-lg px-4 py-2
        bg-red-50 text-red-700
        hover:bg-red-100 hover:cursor-pointer
        transition-colors duration-150
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      <LogOut className="w-5 h-5" />
      {isPending ? "Signing out..." : "Sign Out"}
    </button>
  );
}
