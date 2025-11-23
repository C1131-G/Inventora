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
    className?: string;
    headerClassName?: string;
    itemClassName?: string;
    activeItemClassName?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
title = "Menu", titleIcon, items, activePath, className,
headerClassName, itemClassName, activeItemClassName}) => {
    return (
        <aside className={clsx(className)}>
            <h2 className={clsx("flex items-center gap-2 mb-6", headerClassName)}>
                {titleIcon}
                <span>{title}</span>
            </h2>

            {items.map((item) => {
                const isActive = activePath === item.href;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={clsx(
                            itemClassName,
                            isActive && activeItemClassName
                        )}
                    >
                        {item.icon && <span>{item.icon}</span>}
                        <span>{item.label}</span>
                    </Link>
                );
            })}
        </aside>
    );
};
