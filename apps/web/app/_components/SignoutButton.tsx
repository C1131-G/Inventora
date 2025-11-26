"use client";

import { signout } from "../(auth)/_signout/action";
import { Button } from "@repo/ui";
import { LogOut } from "lucide-react";

export function SignoutButton() {
  return (
    <Button
      variant={"secondary"}
      size={"md"}
      className={
        "w-full rounded-lg bg-gray-800 flex items-center justify-start gap-2 text-white hover:bg-purple-100 hover:text-gray-800 z-50"
      }
      onClick={() => signout()}
    >
      <LogOut className={"w-5 h-5"} />
      Sign Out
    </Button>
  );
}
