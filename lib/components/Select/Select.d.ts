import { DetailedHTMLProps, FC, SelectHTMLAttributes } from "react";
type SelectProps = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
    label?: string;
    error?: string;
};
declare const Select: FC<SelectProps>;
export type { SelectProps };
export default Select;
