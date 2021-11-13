import React from 'react';
import { ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template: ComponentStory<typeof Button> = (args: any) => (
  <Button {...args}>{args.children}</Button>
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  variant: 'primary',
  isLoading: false,
  disabled: false,
  onClick: () => {
    console.log('click primary button');
  },
  children: 'PRIMARY',
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  variant: 'outline',
  isLoading: false,
  disabled: false,
  children: 'OUTLINE',
};

export const ErrorButton = Template.bind({});
ErrorButton.args = {
  variant: 'error',
  isLoading: false,
  disabled: false,
  children: 'ERROR',
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  variant: 'primary',
  isLoading: true,
  disabled: false,
  children: 'LOADING',
  className: 'w-24'
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  variant: 'primary',
  disabled: true,
  isLoading: false,
  onClick: () => {
    console.log('click disabled button');
  },
  children: 'DISABLED',
};
