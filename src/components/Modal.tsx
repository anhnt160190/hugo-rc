import React, { FC } from 'react';
import cn from 'classnames';
import { CloseIcon } from './Icon';

export interface IModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  header?: string;
  footer?: React.ReactElement | null;
}

export const Modal: FC<IModalProps> = ({
  isOpen,
  onDismiss,
  header,
  children,
  footer,
}) => {
  return (
    <div
      className={cn(
        'modal fixed z-10 pt-16 inset-x-0 inset-y-0 bg-black bg-opacity-40 w-full h-full overflow-auto',
        isOpen ? 'block' : 'hidden'
      )}
    >
      <div className="bg-white w-4/5 h-4/5 m-auto rounded-lg flex flex-col transition duration-300">
        <div className="modal-header flex items-center border-gray-200 border-b py-3 px-5">
          {header && <h2 className="text-2xl text-blue-500 font-medium">{header}</h2>}
          <CloseIcon
            className="w-8 h-8 cursor-pointer ml-auto"
            onClick={onDismiss}
          />
        </div>
        <div className="modal-content p-4 flex-grow">{children}</div>
        {footer && (
          <div className="modal-footer py-3 px-5 border-t border-gray-200">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
