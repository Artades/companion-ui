import type { InputHTMLAttributes, ReactNode } from "react";
type NativeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "children">;
interface BaseInputProps extends NativeInputProps {
    label?: string;
    error?: string;
}
interface InputWithIconProps extends BaseInputProps {
    icon: ReactNode;
    iconPosition: "left" | "right";
}
interface InputWithoutIconProps extends BaseInputProps {
    icon?: never;
    iconPosition?: never;
}
type InputProps = InputWithIconProps | InputWithoutIconProps;
declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
export type { InputProps };
export default Input;
