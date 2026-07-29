import type { HTMLAttributes, ReactNode } from "react";
type TooltipContentPosition = "left" | "right" | "bottom" | "top";
interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    contentPosition?: TooltipContentPosition;
    text: string;
}
declare const Tooltip: import("react").ForwardRefExoticComponent<TooltipProps & import("react").RefAttributes<HTMLDivElement>>;
export type { TooltipContentPosition, TooltipProps };
export default Tooltip;
