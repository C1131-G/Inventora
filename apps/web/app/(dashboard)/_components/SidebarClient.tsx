"use client";

import { Sidebar } from "@repo/ui";
import { BarChart3, Package, Plus, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import { SignoutButton } from "./SignoutButton";

export function SidebarClient() {
  const pathname = usePathname();

  return (
    <div className={"relative z-50"}>
      <Sidebar
        title="Inventory App"
        titleIcon={<BarChart3 className="w-7 h-7 mr-3" />}
        activePath={pathname}
        className="fixed left-0 top-0 w-64 min-h-screen bg-gray-900 text-white p-6 z-10 flex flex-col"
        headerClassName="text-xl font-semibold flex items-center gap-2 mb-8"
        itemClassName="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
        activeItemClassName="bg-purple-100 text-gray-800 hover:bg-purple-100"
        items={[
          {
            label: "Dashboard",
            href: "/dashboard",
            icon: <BarChart3 className={"w-5 h-5"} />,
          },
          {
            label: "Inventory",
            href: "/inventory",
            icon: <Package className={"w-5 h-5"} />,
          },
          {
            label: "Add Product",
            href: "/add-product",
            icon: <Plus className={"w-5 h-5"} />,
          },
          {
            label: "Settings",
            href: "/settings",
            icon: <Settings className={"w-5 h-5"} />,
          },
        ]}
      />
      <div className="fixed bottom-6 left-0 w-64 px-6 z-50">
        <SignoutButton />
      </div>
    </div>
  );
}
