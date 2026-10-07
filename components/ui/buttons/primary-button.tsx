import React, { forwardRef } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "outline";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      isLoading = false,
      variant = "primary",
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref,
  ) => {
    const baseStyles = `
      flex
      w-full
      items-center
      justify-center
      gap-2
      rounded-xl
      px-4
      py-2.5
      text-sm
      font-medium
      transition-all
      duration-200
      focus:outline-none
      focus:ring-2
      focus:ring-offset-2
      disabled:cursor-not-allowed
      disabled:opacity-50
    `;

    const variants = {
      primary: `
        bg-mindora-primary
        text-white
        hover:bg-mindora-sage
        focus:ring-mindora-primary
        active:scale-[0.99]
      `,

      secondary: `
        bg-mindora-sage-light
        text-mindora-primary
        hover:bg-mindora-sage/20
        focus:ring-mindora-sage
      `,

      outline: `
        border
        border-mindora-primary
        bg-background
        text-mindora-primary
        hover:bg-mindora-sage-light
        focus:ring-mindora-primary
      `,
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {isLoading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          <>
            {leftIcon}
            <span>{children}</span>
            {rightIcon}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
