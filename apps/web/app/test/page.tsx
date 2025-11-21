"use client";

import {Button} from "@repo/ui";

export default function TestPage() {
    return (
        <div className="p-10 flex flex-col gap-4">
            <Button>primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="ghost">Ghost Button</Button>

            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>

            <Button loading>Loading...</Button>
        </div>
    );
}
