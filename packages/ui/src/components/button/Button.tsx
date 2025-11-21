import React from "react";
import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    props,
    ref
) {
    const {
        children,
        className,
        variant = "primary",
        size = "md",
        loading = false,
        disabled,
        type = "button",
        ...rest
    } = props;

    const isDisabled = disabled || loading;

    const base = "inline-flex items-center justify-center transition";
    const variantClasses: Record<ButtonVariant, string> = {
        primary: "btn-variant-primary",
        secondary: "btn-variant-secondary",
        ghost: "btn-variant-ghost",
    };
    const sizeClasses: Record<ButtonSize, string> = {
        sm: "btn-size-sm",
        md: "btn-size-md",
        lg: "btn-size-lg",
    };

    return (
        <button
            ref={ref}
            type={type}
            className={clsx(base, variantClasses[variant], sizeClasses[size], className, {
                "opacity-50 cursor-not-allowed": isDisabled,
            })}
            aria-disabled={isDisabled}
            disabled={isDisabled}
            {...rest}
        >
            {loading ? <span aria-hidden>Loading…</span> : children}
        </button>
    );
});

Button.displayName = "Button";
export default Button;
