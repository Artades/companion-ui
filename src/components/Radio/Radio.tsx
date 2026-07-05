import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  ReactNode,
  useId,
} from "react";
import styles from "./Radio.module.scss";

type NativeRadioProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "type"
>;

interface RadioProps extends NativeRadioProps {
  label?: ReactNode;
  error?: string;
}

const Radio: FC<RadioProps> = ({
  "aria-describedby": ariaDescribedBy,
  className = "",
  disabled,
  error,
  id,
  label,
  ...props
}) => {
  const generatedId = useId();
  const radioId = id ?? generatedId;
  const errorId = error ? `${radioId}-error` : undefined;
  const describedBy = [ariaDescribedBy, errorId].filter(Boolean).join(" ") || undefined;

  const classes = [
    styles.radio,
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
          id={radioId}
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
};

export type { RadioProps };
export default Radio;
