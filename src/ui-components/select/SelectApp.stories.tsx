import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { SelectApp } from '.';


import '../../theme/globals.scss';

export default {
  title: 'UI/SelectApp',
  component: SelectApp,
  argTypes: {
    name: { control: 'text' },
    cyId: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
    children: { control: 'object' },
  },
} as Meta<typeof SelectApp>;


const Template: StoryFn<typeof SelectApp> = (args) => {
  const [value, setValue] = useState(args.value || '');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    if (args.onChange) {
      args.onChange(e);
    }
  };

  return (
    <SelectApp {...args} value={value} onChange={handleChange}>
      {args.children || (
        <>
          <option value="" disabled>Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </>
      )}
    </SelectApp>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'select',
  value: '',
  children: (
    <>
      <option value="" disabled>Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </>
  ),
};
