import { forwardRef, type HTMLAttributes, type ImgHTMLAttributes } from "react";
import classNames from "../../helpers/classNames";
import styles from "./Avatar.module.scss";

type AvatarSize = "small" | "medium" | "large";

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  alt: string;
  imageUrl: string;
  imageProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">;
  size?: AvatarSize;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      alt,
      className = "",
      imageProps,
      imageUrl,
      size = "medium",
      ...props
    },
    ref,
  ) => {
    const classes = classNames(
      styles.avatar,
      styles[`size-${size}`],
      className,
    );

    return (
      <div {...props} ref={ref} className={classes}>
        <img
          {...imageProps}
          alt={alt}
          className={classNames(styles.image, imageProps?.className)}
          src={imageUrl}
        />
      </div>
    );
  },
);

Avatar.displayName = "Avatar";

export type { AvatarProps, AvatarSize };
export default Avatar;
