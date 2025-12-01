"use client";

import { signout } from "../../(auth)/_signout/action";
import { Button } from "@repo/ui";
import { LogOut } from "lucide-react";

export function SignoutButton() {
  return (
    <Button
      variant={"secondary"}
      size={"md"}
      className={
        "w-full rounded-lg flex items-center justify-start gap-2 text-black bg-gray-800 cursor-pointer hover:z-50"
      }
      onClick={() => signout()}
    >
      <LogOut className={"w-5 h-5"} />
      Sign Out
    </Button>
  );
}
