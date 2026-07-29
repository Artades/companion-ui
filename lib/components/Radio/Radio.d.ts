import type { InputHTMLAttributes, ReactNode } from "react";
type NativeRadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;
interface RadioProps extends NativeRadioProps {
    label?: ReactNode;
    error?: string;
}
declare const Radio: import("react").ForwardRefExoticComponent<RadioProps & import("react").RefAttributes<HTMLInputElement>>;
export type { RadioProps };
export default Radio;
