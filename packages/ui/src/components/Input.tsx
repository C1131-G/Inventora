import React from "react";
import clsx from "clsx";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, error, ...props }, ref) => {
        return (
            <div className="ui-input-wrapper">
                <input
                    ref={ref}
                    className={clsx("ui-input-base", error && "ui-input-error", className)}
                    {...props}
                />
                {error && <p className="ui-input-error-text">{error}</p>}
            </div>
        );
    }
);

Input.displayName = "Input";
