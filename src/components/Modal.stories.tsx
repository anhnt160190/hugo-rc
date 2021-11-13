import React, { useState } from 'react';
import { ComponentStory } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from './Button';

export default {
  title: 'Modal',
  component: Modal,
};

const Template: ComponentStory<typeof Modal> = (args: any) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>OPEN MODAL</Button>

      <Modal isOpen={isOpen} onDismiss={() => setOpen(false)} {...args}>
        <p>Modal Content</p>
      </Modal>
    </div>
  );
};

export const ExampleModal = Template.bind({});
ExampleModal.args = {
  header: 'Modal Headers',
  footer: <p>Footer</p>,
};
