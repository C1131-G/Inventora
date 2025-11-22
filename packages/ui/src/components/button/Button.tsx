import React from "react";
import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            variant = "primary",
            size = "md",
            loading = false,
            disabled,
            className,
            type = "button",
            ...props
        },
        ref
    ) => {
        const isDisabled = disabled || loading;

        return (
            <button
                ref={ref}
                type={type}
                disabled={isDisabled}
                className={clsx(
                    "ui-btn-base",
                    `ui-btn-variant-${variant}`,
                    `ui-btn-size-${size}`,
                    {
                        "opacity-50 cursor-not-allowed": isDisabled,
                    },
                    className
                )}
                {...props}
            >
                {loading ? (
                    <span className="ui-btn-loader" aria-hidden>
            Loading…
          </span>
                ) : (
                    children
                )}
            </button>
        );
    }
);

Button.displayName = "Button";
