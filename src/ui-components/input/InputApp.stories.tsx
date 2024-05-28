import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { InputApp } from '.';

import '../../theme/globals.scss';
import styles from './styles.module.scss';

export default {
  title: 'UI/InputApp',
  component: InputApp,
  argTypes: {
    type: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    error: { control: 'text' },
    name: { control: 'text' },
    isTouch: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
} as Meta<typeof InputApp>;

const Template: StoryFn<typeof InputApp> = (args) => {
  const [value, setValue] = useState(args.value || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    if (args.onChange) {
      args.onChange(e);
    }
  };

  return (
    <div className={styles.wrapperStory}>
      <InputApp
        {...args}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Enter text',
  value: '',
  error: '',
  name: 'input',
  isTouch: false,
};

export const WithError = Template.bind({});
WithError.args = {
  type: 'text',
  placeholder: 'Enter text',
  value: 'Invalid input',
  error: 'This field is required',
  name: 'input',
  isTouch: true,
};
