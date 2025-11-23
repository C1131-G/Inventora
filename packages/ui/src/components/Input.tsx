import React from "react";
import clsx from "clsx";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, error, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-1">
                <input
                    ref={ref}
                    className={clsx(
                        "w-full rounded-md border bg-white px-3 py-2 text-gray-900 shadow-sm transition",
                        "focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent",
                        error && "border-red-500 focus:ring-red-500",
                        className
                    )}
                    {...props}
                />
                {error && <p className="text-sm text-red-600">{error}</p>}
            </div>
        );
    }
);

Input.displayName = "Input";
