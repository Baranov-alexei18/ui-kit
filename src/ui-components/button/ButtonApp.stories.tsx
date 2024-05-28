import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { ButtonType } from './types';
import { ButtonApp } from '.';

import '../../theme/globals.scss';

const meta: Meta<typeof ButtonApp> = {
  title: 'UI/ButtonApp',
  component: ButtonApp,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
    type: {
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset'],
      },
    },
    cyId: { control: 'text' },
    children: { control: 'text' },
  },
};

export default meta;

const Template: StoryFn<Partial<ButtonType>> = (args) => <ButtonApp {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
  backgroundColor: 'white',
  disabled: false,
  type: 'button',
  cyId: 'white-button',
};

export const YellowButton = Template.bind({});
YellowButton.args = {
  children: 'Yellow button',
  backgroundColor: '#FFD050',
  disabled: false,
  type: 'button',
  cyId: 'yellow-button',
};
