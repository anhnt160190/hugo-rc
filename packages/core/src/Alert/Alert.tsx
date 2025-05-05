import React from 'react';
import cx from 'classnames';

export interface AlertProps {
  description: string;
  variant: 'info' | 'success' | 'warning' | 'error';
  className?: string;
}

const variantStyles = {
  info: 'bg-blue-500',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
};

export const Alert = ({ description, variant, className }: AlertProps) => {
  return (
    <div className={cx(variantStyles[variant], 'p-4 rounded-md', className)}>
      {description}
    </div>
  );
};
