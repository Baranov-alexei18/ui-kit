import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { ElasticSearch } from '.';

import '../../theme/globals.scss';

export default {
  title: 'UI/ElasticSearch',
  component: ElasticSearch,
} as Meta<typeof ElasticSearch>;

const Template: StoryFn<typeof ElasticSearch> = (args) => <ElasticSearch {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: ['Marketing', 'Life', 'Technology', 'Economic', 'Date', 'Sports'],
  onHandleClick: (str: string) => alert(`Selected tag: ${str}`),
};
