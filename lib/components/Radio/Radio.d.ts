import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from "react";
type NativeRadioProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "type">;
interface RadioProps extends NativeRadioProps {
    label?: ReactNode;
    error?: string;
}
declare const Radio: FC<RadioProps>;
export type { RadioProps };
export default Radio;
