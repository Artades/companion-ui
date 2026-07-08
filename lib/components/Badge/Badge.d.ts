import { ElementType, FC, HTMLAttributes, ReactNode } from "react";
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
declare const Badge: FC<BadgeProps>;
export type { BadgeProps, BadgeSize, BadgeTone, BadgeVariant };
export default Badge;
