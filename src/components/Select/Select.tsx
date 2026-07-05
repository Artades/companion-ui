import {
  DetailedHTMLProps,
  FC,
  SelectHTMLAttributes,
  useId,
} from "react";
import styles from "./Select.module.scss";

type SelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  label?: string;
  error?: string;
};

const Select: FC<SelectProps> = ({
  "aria-describedby": ariaDescribedBy,
  children,
  className = "",
  disabled,
  error,
  id,
  label,
  ...props
}) => {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const errorId = error ? `${selectId}-error` : undefined;
  const describedBy = [ariaDescribedBy, errorId].filter(Boolean).join(" ") || undefined;

  const classes = [
    styles.select,
    error && styles.hasError,
    label && styles.hasLabel,
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={classes}>
      <span className={styles.control}>
        {label && <span className={styles.label}>{label}</span>}

        <select
          {...props}
          aria-describedby={describedBy}
          aria-invalid={error ? "true" : undefined}
          disabled={disabled}
          id={selectId}
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
};

export type { SelectProps };
export default Select;
