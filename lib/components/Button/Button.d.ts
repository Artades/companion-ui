import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";
import "./Button.scss";
type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "small" | "medium" | "large";
interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
}
declare const Button: FC<ButtonProps>;
export type { ButtonProps };
export default Button;
