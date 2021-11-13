import { FC } from 'react';
import cn from 'classnames';

export interface ISpinnerProps {
  className?: string;
}

export const Spinner: FC<ISpinnerProps> = ({ className }) => {
  return (
    <svg
      className={cn('animate-spin rounded-full h-4 w-4 border-b-2', className)}
    ></svg>
  );
};
