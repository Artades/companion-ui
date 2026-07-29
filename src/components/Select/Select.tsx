import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";
import classNames from "../../helpers/classNames";
import useFieldControl from "../../helpers/useFieldControl";
import styles from "./Select.module.scss";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  "aria-describedby": ariaDescribedBy,
  children,
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
    styles.select,
    error && styles.hasError,
    label && styles.hasLabel,
    disabled && styles.disabled,
    className,
  );

  return (
    <label className={classes}>
      <span className={styles.control}>
        {label && <span className={styles.label}>{label}</span>}

        <select
          {...props}
          ref={ref}
          aria-describedby={describedBy}
          aria-invalid={error ? "true" : undefined}
          disabled={disabled}
          id={controlId}
        >
          {children}
        </select>

        <span className={styles.chevron} aria-hidden="true" />
      </span>

      {error && (
        <span className={styles.error} id={errorId} role="alert">
          {error}
        </span>
      )}
    </label>
  );
});

Select.displayName = "Select";

export type { SelectProps };
export default Select;
