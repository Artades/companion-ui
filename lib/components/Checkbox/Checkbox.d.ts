import type { InputHTMLAttributes, ReactNode } from "react";
type NativeCheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;
interface CheckboxProps extends NativeCheckboxProps {
    label?: ReactNode;
    error?: string;
}
declare const Checkbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<HTMLInputElement>>;
export type { CheckboxProps };
export default Checkbox;
