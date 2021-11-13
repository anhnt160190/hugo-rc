import React, { FC } from 'react';
import { ComponentStory } from '@storybook/react';
import { Notification, useNotification } from './Notification';
import { Button } from './Button';

export default {
  title: 'Notification',
  component: Notification,
};

const Template: ComponentStory<any> = (args: any) => {
  return (
    <Notification>
      <MyComponent />
    </Notification>
  );
};

const MyComponent: FC = () => {
  const { setNotification } = useNotification();

  return (
    <div>
      <Button
        onClick={() =>
          setNotification({
            message: 'Successfully',
            variant: 'success',
            duration: 2000,
          })
        }
        className="mb-5"
      >
        Open Success Notification
      </Button>

      <Button
        onClick={() =>
          setNotification({
            message: 'Warning!!!',
            variant: 'warn',
            duration: 2000,
          })
        }
        className="mb-5"
        variant="outline"
      >
        Open Warning Notification
      </Button>

      <Button
        onClick={() =>
          setNotification({
            message: 'Something went wrong',
            variant: 'error',
            duration: 2000,
          })
        }
        className="mb-5"
        variant="error"
      >
        Open Error Notification
      </Button>
    </div>
  );
};

export const Example = Template.bind({});
Example.args = {
  children: MyComponent,
};
