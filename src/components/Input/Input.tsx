import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  ReactNode,
  useId,
} from "react";
import styles from "./Input.module.scss";

type NativeInputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "children"
>;

interface BaseInputProps extends NativeInputProps {
  label?: string;
  error?: string;
}

interface InputWithIconProps extends BaseInputProps {
  icon: ReactNode;
  iconPosition: "left" | "right";
}

interface InputWithoutIconProps extends BaseInputProps {
  icon?: never;
  iconPosition?: never;
}

type InputProps = InputWithIconProps | InputWithoutIconProps;

const Input: FC<InputProps> = ({
  "aria-describedby": ariaDescribedBy,
  className = "",
  disabled,
  error,
  id,
  label,
  icon,
  iconPosition,
  readOnly,
  ...props
}) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [ariaDescribedBy, errorId].filter(Boolean).join(" ") || undefined;

  const classes = [
    styles.input,
    error && styles.hasError,
    label && styles.hasLabel,
    icon && iconPosition === "left" && styles.hasIconLeft,
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

        {icon && iconPosition === "left" && (
          <span className={`${styles.icon} ${styles.iconLeft}`}>{icon}</span>
        )}

        <input
          {...props}
          aria-describedby={describedBy}
          aria-invalid={error ? "true" : undefined}
          disabled={disabled}
          id={inputId}
          readOnly={readOnly}
        />

        {icon && iconPosition === "right" && (
          <span className={`${styles.icon} ${styles.iconRight}`}>{icon}</span>
        )}
      </span>

      {error && (
        <span className={styles.error} id={errorId} role="alert">
          {error}
        </span>
      )}
    </label>
  );
};

export type { InputProps };
export default Input;
