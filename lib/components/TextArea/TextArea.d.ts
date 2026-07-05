import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from "react";
type TextAreaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
    label?: string;
    error?: string;
};
declare const TextArea: FC<TextAreaProps>;
export type { TextAreaProps };
export default TextArea;
