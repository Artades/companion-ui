import {
  DetailedHTMLProps,
  FC,
  TextareaHTMLAttributes,
  useId,
} from "react";
import styles from "./TextArea.module.scss";

type TextAreaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label?: string;
  error?: string;
};

const TextArea: FC<TextAreaProps> = ({
  "aria-describedby": ariaDescribedBy,
  className = "",
  disabled,
  error,
  id,
  label,
  readOnly,
  ...props
}) => {
  const generatedId = useId();
  const textAreaId = id ?? generatedId;
  const errorId = error ? `${textAreaId}-error` : undefined;
  const describedBy =
    [ariaDescribedBy, errorId].filter(Boolean).join(" ") || undefined;

  const classes = [
    styles.textArea,
    error && styles.hasError,
    label && styles.hasLabel,
    disabled && styles.disabled,
    readOnly && styles.readOnly,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={classes}>
      <span className={styles.control}>
        {label && <span className={styles.label}>{label}</span>}

        <textarea
          {...props}
          aria-describedby={describedBy}
          aria-invalid={error ? "true" : undefined}
          disabled={disabled}
          id={textAreaId}
          readOnly={readOnly}
        />
      </span>
      {error && (
        <span className={styles.error} id={errorId} role="alert">
          {error}
        </span>
      )}
    </label>
  );
};

export type { TextAreaProps };
export default TextArea;
