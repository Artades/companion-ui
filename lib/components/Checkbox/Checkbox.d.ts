import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from "react";
type NativeCheckboxProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "type">;
interface CheckboxProps extends NativeCheckboxProps {
    label?: ReactNode;
    error?: string;
}
declare const Checkbox: FC<CheckboxProps>;
export type { CheckboxProps };
export default Checkbox;
