import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import classNames from "../../helpers/classNames";
import useFieldControl from "../../helpers/useFieldControl";
import styles from "./Radio.module.scss";

type NativeRadioProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
>;

interface RadioProps extends NativeRadioProps {
  label?: ReactNode;
  error?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(({
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
    styles.radio,
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
          type="radio"
        />
        <span className={styles.mark} aria-hidden="true" />
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

Radio.displayName = "Radio";

export type { RadioProps };
export default Radio;
