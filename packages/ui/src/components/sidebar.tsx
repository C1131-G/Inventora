import React from "react";
import Link from "next/link";
import clsx from "clsx";

export interface SidebarItem {
    label: string;
    href: string;
    icon?: React.ReactNode;
}

export interface SidebarProps {
    title?: string;
    titleIcon?: React.ReactNode;
    items: SidebarItem[];
    activePath?: string;
}

export const Sidebar: React.FC<SidebarProps> = (
    {
   title = "Menu", titleIcon, items, activePath,
   }) => {
    return (
        <aside className="ui-sidebar">
            <h2 className="ui-sidebar-header flex items-center gap-2">
                {titleIcon}
                <span>{title}</span>
            </h2>

            <nav className="ui-sidebar-nav">
                {items.map((item) => {
                    const isActive = activePath === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={clsx(
                                "ui-sidebar-item",
                                isActive && "ui-sidebar-item-active"
                            )}
                        >
                            {item.icon && <span className="ui-sidebar-icon">{item.icon}</span>}
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
};
