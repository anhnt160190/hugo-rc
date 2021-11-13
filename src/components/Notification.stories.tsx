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
      >
        Open Notification
      </Button>
    </div>
  );
};

export const Example = Template.bind({});
Example.args = {
  children: MyComponent,
};
