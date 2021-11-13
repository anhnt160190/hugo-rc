import React, { FC, ComponentPropsWithoutRef } from 'react';
import cn from 'classnames';

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
  className?: string;
}

export const CloseIcon: FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      className={cn('w-4 h-4', className)}
      {...props}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="128.000000pt"
      height="128.000000pt"
      viewBox="0 0 128.000000 128.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M332 948 c-7 -7 -12 -19 -12 -27 0 -9 60 -75 132 -148 l133 -133
 -133 -133 c-72 -73 -132 -139 -132 -148 0 -19 20 -39 39 -39 9 0 75 60 148
 132 l133 133 133 -133 c73 -72 139 -132 148 -132 19 0 39 20 39 39 0 9 -60 75
 -132 148 l-133 133 133 133 c72 73 132 139 132 148 0 19 -20 39 -39 39 -9 0
 -75 -60 -148 -132 l-133 -133 -133 133 c-73 72 -139 132 -148 132 -8 0 -20 -5
 -27 -12z"
        />
      </g>
    </svg>
  );
};
