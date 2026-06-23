import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import "./Button.scss";
type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
declare const Button: FC<ButtonProps>;
export type { ButtonProps };
export default Button;
