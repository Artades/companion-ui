import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";
import "./Button.scss";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  icon,
  iconPosition = "left",
  children,
  className = "",
  disabled,
  ...props
}) => {
  const classes = [
    "button",
    `button--${variant}`,
    `button--${size}`,
    disabled && "button--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button {...props} className={classes} disabled={disabled}>
      {icon && iconPosition === "left" && (
        <span className="button__icon button__icon--left">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="button__icon button__icon--right">{icon}</span>
      )}
    </button>
  );
};

export type { ButtonProps };
export default Button;
