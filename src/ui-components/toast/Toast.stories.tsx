import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Toast } from '.';


import '../../theme/globals.scss';
import { ButtonApp } from '../button';

export default {
  title: 'UI/Toast',
  component: Toast,
  argTypes: {
    message: { control: 'text' },
    type: {
      control: 'select',
      options: ['success', 'error'],
    },
    onClose: { action: 'closed' },
  },
} as Meta<typeof Toast>;


const Template: StoryFn<typeof Toast> = (args) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    if (args.onClose) {
      args.onClose();
    }
  };

  return (
    <div>
      {isVisible && <Toast {...args} onClose={handleClose} />}
      <ButtonApp backgroundColor='var(--color-yellow)' onClick={() => setIsVisible(true)}>Show Toast</ButtonApp>
    </div>
  );
};

export const Success = Template.bind({});
Success.args = {
  message: 'This is a success toast!',
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  message: 'This is error toast!',
  type: 'error',
};