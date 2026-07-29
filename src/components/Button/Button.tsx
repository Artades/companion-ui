import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "../../helpers/classNames";
import "./Button.scss";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = "primary",
  size = "medium",
  icon,
  iconPosition = "left",
  children,
  className = "",
  disabled,
  ...props
}, ref) => {
  const classes = classNames(
    "button",
    `button--${variant}`,
    `button--${size}`,
    disabled && "button--disabled",
    className,
  );

  return (
    <button {...props} ref={ref} className={classes} disabled={disabled}>
      {icon && iconPosition === "left" && (
        <span className="button__icon button__icon--left">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="button__icon button__icon--right">{icon}</span>
      )}
    </button>
  );
});

Button.displayName = "Button";

export type { ButtonProps };
export default Button;
