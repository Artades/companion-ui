import { DetailedHTMLProps, FC, InputHTMLAttributes, useId } from "react";
import styles from "./Switch.module.scss";
type SwitchProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "type"
> & { label?: string; error?: string };

export const Switch: FC<SwitchProps> = ({
  "aria-describedby": ariaDescribedBy,
  className = "",
  disabled,
  id,
  error,
  label,
  ...props
}) => {
  const generatedId = useId();
  const switchId = id ?? generatedId;
  const errorId = error ? `${switchId}-error` : undefined;
  const describedBy =
    [ariaDescribedBy, errorId].filter(Boolean).join(" ") || undefined;

  const classes = [
    styles.switch,
    error && styles.hasError,
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={classes}>
      {label && <span className={styles.label}>{label}</span>}

      <span className={styles.control}>
        <input
          {...props}
          aria-describedby={describedBy}
          aria-invalid={error ? "true" : undefined}
          disabled={disabled}
          id={switchId}
          role="switch"
          type="checkbox"
        />
        <span className={styles.track} aria-hidden="true">
          <span className={styles.circle} />
        </span>
      </span>

      {error && (
        <span className={styles.error} id={errorId} role="alert">
          {error}
        </span>
      )}
    </label>
  );
};

export type { SwitchProps };
export default Switch;
