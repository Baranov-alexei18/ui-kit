import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { ChipApp } from '.';

import '../../theme/globals.scss';

export default {
  title: 'UI/ChipApp',
  component: ChipApp,
  argTypes: {
    onHandleClick: { action: 'clicked' },
  },
} as Meta<typeof ChipApp>;

const Template: StoryFn<typeof ChipApp> = (args) => <ChipApp {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Chip',
};

export const Clickable = Template.bind({});
Clickable.args = {
  children: 'Marketing',
  onHandleClick: () => alert('Marketing choose!'),
};
