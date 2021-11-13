import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  FC,
} from 'react';
import cn from 'classnames';

export interface INotificationProps {
  duration?: number;
  message: string;
  variant: 'success' | 'warn' | 'error';
}

interface INotificationContext {
  setNotification: (props: INotificationProps) => void;
}

const NotificationContext = createContext<INotificationContext>({
  setNotification: () => null,
});

export const Notification: FC = ({ children }) => {
  const defaultState = {
    duration: 2000,
    message: '',
    variant: 'success',
    open: false,
  };
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    if (state.open) {
      setTimeout(() => {
        setState(defaultState);
      }, state.duration);
    }
  }, [state]);

  return (
    <NotificationContext.Provider
      value={{
        setNotification: ({
          duration = 2000,
          message,
          variant,
        }: INotificationProps) =>
          setState({ duration, message, variant, open: true }),
      }}
    >
      {state.open && (
        <div
          className={cn(
            'fixed top-4 right-4 px-4 py-2 rounded-lg text-white font-medium pointer-cursor animate-bounce',
            [
              state.variant === 'success' && 'bg-green-400',
              state.variant === 'warn' && 'bg-yellow-400',
              state.variant === 'error' && 'bg-red-400',
            ]
          )}
        >
          <p>{state.message}</p>
        </div>
      )}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
