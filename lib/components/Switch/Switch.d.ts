import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
type SwitchProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "type"> & {
    label?: string;
    error?: string;
};
export declare const Switch: FC<SwitchProps>;
export type { SwitchProps };
export default Switch;
