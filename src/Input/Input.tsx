import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  label?: string;
  error?: string;
}  {}

const Input: FC<InputProps> = () => {

};

export type { InputProps };
export default Input;
