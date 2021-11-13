import React, { forwardRef, ComponentPropsWithoutRef } from 'react';
import cn from 'classnames';
import { Spinner } from './Spinner';

export interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
  className?: string;
  variant?: 'primary' | 'outline' | 'error';
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      className,
      variant = 'primary',
      isLoading = false,
      disabled = false,
      onClick,
      children,
    }: IButtonProps,
    ref
  ) => {
    return (
      <button
        className={cn(
          'rounded-lg px-5 py-3 font-bold flex items-center justify-center focus:outline-none transition ease-in-out duration-150',
          disabled
            ? 'cursor-not-allowed bg-gray-500 hover:bg-gray-500 text-white'
            : [
                variant === 'error' &&
                  'bg-red-500 hover:bg-red-600 text-white border-white',
                variant === 'outline' &&
                  'bg-white text-blue-500 border border-blue-500',
                variant === 'primary' &&
                  'bg-blue-500 hover:bg-blue-600 text-white border-white',
              ],
          className
        )}
        onClick={onClick}
        disabled={disabled}
        type="button"
        ref={ref}
      >
        {isLoading ? (
          <Spinner
            className={
              variant === 'outline' ? 'border-blue-500' : 'border-white'
            }
          />
        ) : (
          <>{children}</>
        )}
      </button>
    );
  }
);
