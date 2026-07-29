import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import classNames from "../../helpers/classNames";
import useFieldControl from "../../helpers/useFieldControl";
import styles from "./Input.module.scss";

type NativeInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
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

const Input = forwardRef<HTMLInputElement, InputProps>(({
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
}, ref) => {
  const { controlId, describedBy, errorId } = useFieldControl({
    ariaDescribedBy,
    error,
    id,
  });

  const classes = classNames(
    styles.input,
    error && styles.hasError,
    label && styles.hasLabel,
    icon && iconPosition === "left" && styles.hasIconLeft,
    disabled && styles.disabled,
    readOnly && styles.readOnly,
    className,
  );

  return (
    <label className={classes}>
      <span className={styles.control}>
        {label && <span className={styles.label}>{label}</span>}

        {icon && iconPosition === "left" && (
          <span className={`${styles.icon} ${styles.iconLeft}`}>{icon}</span>
        )}

        <input
          {...props}
          ref={ref}
          aria-describedby={describedBy}
          aria-invalid={error ? "true" : undefined}
          disabled={disabled}
          id={controlId}
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
});

Input.displayName = "Input";

export type { InputProps };
export default Input;
