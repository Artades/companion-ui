import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import classNames from "../../helpers/classNames";
import useFieldControl from "../../helpers/useFieldControl";
import styles from "./TextArea.module.scss";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  "aria-describedby": ariaDescribedBy,
  className = "",
  disabled,
  error,
  id,
  label,
  readOnly,
  ...props
}, ref) => {
  const { controlId, describedBy, errorId } = useFieldControl({
    ariaDescribedBy,
    error,
    id,
  });

  const classes = classNames(
    styles.textArea,
    error && styles.hasError,
    label && styles.hasLabel,
    disabled && styles.disabled,
    readOnly && styles.readOnly,
    className,
  );

  return (
    <label className={classes}>
      <span className={styles.control}>
        {label && <span className={styles.label}>{label}</span>}

        <textarea
          {...props}
          ref={ref}
          aria-describedby={describedBy}
          aria-invalid={error ? "true" : undefined}
          disabled={disabled}
          id={controlId}
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
});

TextArea.displayName = "TextArea";

export type { TextAreaProps };
export default TextArea;
