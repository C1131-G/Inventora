import React from "react";
import { SidebarClient } from "../_components/SidebarClient";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <SidebarClient />
      <main className="flex-1 p-6 ml-64">{children}</main>
    </div>
  );
}
