import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import classNames from "../../helpers/classNames";
import useFieldControl from "../../helpers/useFieldControl";
import styles from "./Switch.module.scss";

type SwitchProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> & { label?: string; error?: string };

const Switch = forwardRef<HTMLInputElement, SwitchProps>(({
  "aria-describedby": ariaDescribedBy,
  className = "",
  disabled,
  id,
  error,
  label,
  ...props
}, ref) => {
  const { controlId, describedBy, errorId } = useFieldControl({
    ariaDescribedBy,
    error,
    id,
  });

  const classes = classNames(
    styles.switch,
    error && styles.hasError,
    disabled && styles.disabled,
    className,
  );

  return (
    <label className={classes}>
      {label && <span className={styles.label}>{label}</span>}

      <span className={styles.control}>
        <input
          {...props}
          ref={ref}
          aria-describedby={describedBy}
          aria-invalid={error ? "true" : undefined}
          disabled={disabled}
          id={controlId}
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
});

Switch.displayName = "Switch";

export type { SwitchProps };
export default Switch;
