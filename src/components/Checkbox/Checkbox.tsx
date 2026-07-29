import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import classNames from "../../helpers/classNames";
import useFieldControl from "../../helpers/useFieldControl";
import styles from "./Checkbox.module.scss";

type NativeCheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
>;

interface CheckboxProps extends NativeCheckboxProps {
  label?: ReactNode;
  error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  "aria-describedby": ariaDescribedBy,
  className = "",
  disabled,
  error,
  id,
  label,
  ...props
}, ref) => {
  const { controlId, describedBy, errorId } = useFieldControl({
    ariaDescribedBy,
    error,
    id,
  });

  const classes = classNames(
    styles.checkbox,
    error && styles.hasError,
    disabled && styles.disabled,
    className,
  );

  return (
    <label className={classes}>
      <span className={styles.control}>
        <input
          {...props}
          ref={ref}
          aria-describedby={describedBy}
          aria-invalid={error ? "true" : undefined}
          disabled={disabled}
          id={controlId}
          type="checkbox"
        />
        <span className={styles.box} aria-hidden="true" />
      </span>

      {label && <span className={styles.label}>{label}</span>}

      {error && (
        <span className={styles.error} id={errorId} role="alert">
          {error}
        </span>
      )}
    </label>
  );
});

Checkbox.displayName = "Checkbox";

export type { CheckboxProps };
export default Checkbox;
