import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  ReactNode,
  useId,
} from "react";
import styles from "./Checkbox.module.scss";

type NativeCheckboxProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "type"
>;

interface CheckboxProps extends NativeCheckboxProps {
  label?: ReactNode;
  error?: string;
}

const Checkbox: FC<CheckboxProps> = ({
  "aria-describedby": ariaDescribedBy,
  className = "",
  disabled,
  error,
  id,
  label,
  ...props
}) => {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;
  const errorId = error ? `${checkboxId}-error` : undefined;
  const describedBy = [ariaDescribedBy, errorId].filter(Boolean).join(" ") || undefined;

  const classes = [
    styles.checkbox,
    error && styles.hasError,
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={classes}>
      <span className={styles.control}>
        <input
          {...props}
          aria-describedby={describedBy}
          aria-invalid={error ? "true" : undefined}
          disabled={disabled}
          id={checkboxId}
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
};

export type { CheckboxProps };
export default Checkbox;
