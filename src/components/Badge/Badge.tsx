import { forwardRef } from "react";
import type { ElementType, HTMLAttributes, ReactNode } from "react";
import classNames from "../../helpers/classNames";
import styles from "./Badge.module.scss";

type BadgeTone = "neutral" | "primary" | "success" | "warning" | "danger";
type BadgeVariant = "filled" | "soft" | "outline";
type BadgeSize = "small" | "medium";

interface BadgeProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
  dot?: boolean;
  size?: BadgeSize;
  tone?: BadgeTone;
  variant?: BadgeVariant;
}

const Badge = forwardRef<HTMLElement, BadgeProps>(({
  as: Component = "span",
  children,
  className = "",
  dot = false,
  size = "medium",
  tone = "neutral",
  variant = "soft",
  ...props
}) => {
  const classes = classNames(
    styles.badge,
    styles[`size-${size}`],
    styles[`tone-${tone}`],
    styles[`variant-${variant}`],
    dot && styles.hasDot,
    className,
  );

  return (
    <Component {...props} ref={ref} className={classes}>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      <span className={styles.content}>{children}</span>
    </Component>
  );
});

Badge.displayName = "Badge";

export type { BadgeProps, BadgeSize, BadgeTone, BadgeVariant };
export default Badge;
