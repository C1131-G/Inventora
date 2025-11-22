"use client";

import { Sidebar } from "@repo/ui";
import { BarChart3, Package, Plus, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

export function SidebarClient() {
    const pathname = usePathname();

    return (
        <Sidebar
            title="Inventory App"
            titleIcon={<BarChart3 className={"w-7 h-7 mr-2"}/>}
            activePath={pathname}
            items={[
                { label: "Dashboard", href: "/dashboard", icon: <BarChart3 /> },
                { label: "Inventory", href: "/inventory", icon: <Package /> },
                { label: "Add Product", href: "/add-product", icon: <Plus /> },
                { label: "Settings", href: "/settings", icon: <Settings /> },
            ]}
        />
    );
}
