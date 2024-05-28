import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { ButtonApp } from '../button';

import { BaseModal } from '.';

import '../../theme/globals.scss';

export default {
  title: 'UI/Modal',
  component: BaseModal,
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
    children: { control: 'text' },
  },
} as Meta<typeof BaseModal>;

const Template: StoryFn<typeof BaseModal> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    if (args.onClose) args.onClose();
  };

  return (
    <>
      <ButtonApp backgroundColor="var(--color-yellow)" onClick={handleOpen}>Open Modal</ButtonApp>
      <BaseModal {...args} isOpen={isOpen} onClose={handleClose}>
        {args.children || 'This is the modal content'}
      </BaseModal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <div>
      <h2>Custom Modal Content</h2>
      <h4>This is a custom message inside the modal.</h4>
      <h5>Subtitle Content</h5>
    </div>
  ),
};
