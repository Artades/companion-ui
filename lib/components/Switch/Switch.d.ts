import type { InputHTMLAttributes } from "react";
type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    label?: string;
    error?: string;
};
declare const Switch: import("react").ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    label?: string;
    error?: string;
} & import("react").RefAttributes<HTMLInputElement>>;
export type { SwitchProps };
export default Switch;
