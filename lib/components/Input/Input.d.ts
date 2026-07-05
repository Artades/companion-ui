import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from "react";
type NativeInputProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "children">;
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
declare const Input: FC<InputProps>;
export type { InputProps };
export default Input;
