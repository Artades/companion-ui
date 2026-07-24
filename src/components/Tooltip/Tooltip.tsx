import { FC, HTMLAttributes, ReactNode } from "react";
import styles from "./Tooltip.module.scss";

type TooltipContentPosition = "left" | "right" | "bottom" | "top";

interface TooltipProps extends HTMLAttributes<HTMLElement> {
  contentPosition: TooltipContentPosition;
  children: ReactNode;
  text: string;
}

const Tooltip: FC<TooltipProps> = ({
  contentPosition = "top",
  children,
  className,
  text,
}) => {
  const classes = [styles.tooltip, className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <div content-position={contentPosition} className={styles.tooltipContent}>
        {children}
      </div>
      <span className={styles.tooltipText}>{text}</span>
    </div>
  );
};

export default Tooltip;
