import React from 'react';
import { ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
};

const Template: ComponentStory<typeof Avatar> = (args: any) => (
  <Avatar {...args} />
);

export const UserAvatar = Template.bind({});
UserAvatar.args = {
  width: 128,
  height: 128,
  src: 'https://mui.com/static/images/avatar/1.jpg',
};
