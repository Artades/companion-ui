import { ElementType, FC, HTMLAttributes, ReactNode } from "react";
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

const Badge: FC<BadgeProps> = ({
  as: Component = "span",
  children,
  className = "",
  dot = false,
  size = "medium",
  tone = "neutral",
  variant = "soft",
  ...props
}) => {
  const classes = [
    styles.badge,
    styles[`size-${size}`],
    styles[`tone-${tone}`],
    styles[`variant-${variant}`],
    dot && styles.hasDot,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component {...props} className={classes}>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      <span className={styles.content}>{children}</span>
    </Component>
  );
};

export type { BadgeProps, BadgeSize, BadgeTone, BadgeVariant };
export default Badge;
