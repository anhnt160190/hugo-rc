import React, { FC } from 'react';
import cn from 'classnames';

export interface IAvatarProps {
  alt?: string;
  className?: string;
  src: string;
  width?: number;
  height?: number;
}

export const Avatar: FC<IAvatarProps> = ({
  alt = 'avatar',
  className,
  src,
  width,
  height,
}) => {
  return (
    <div
      className={cn(
        'rounded-full h-24 w-24 flex items-center justify-center',
        className
      )}
      style={{ width, height }}
    >
      <img
        alt={alt}
        src={src}
        className="rounded-full w-full h-full object-cover"
      />
    </div>
  );
};
