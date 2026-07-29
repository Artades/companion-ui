import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import classNames from "../../helpers/classNames";
import styles from "./Tooltip.module.scss";

type TooltipContentPosition = "left" | "right" | "bottom" | "top";

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  contentPosition?: TooltipContentPosition;
  text: string;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(({
  contentPosition = "top",
  children,
  className = "",
  text,
  ...props
}, ref) => {
  const classes = classNames(styles.tooltip, className);

  return (
    <div {...props} ref={ref} className={classes}>
      <div content-position={contentPosition} className={styles.tooltipContent}>
        {children}
      </div>
      <span className={styles.tooltipText}>{text}</span>
    </div>
  );
});

Tooltip.displayName = "Tooltip";

export type { TooltipContentPosition, TooltipProps };
export default Tooltip;
