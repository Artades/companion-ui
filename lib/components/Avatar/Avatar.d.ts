import { type HTMLAttributes, type ImgHTMLAttributes } from "react";
interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
    alt: string;
    imageUrl: string;
    imageProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">;
}
declare const Avatar: import("react").ForwardRefExoticComponent<AvatarProps & import("react").RefAttributes<HTMLDivElement>>;
export type { AvatarProps };
export default Avatar;
