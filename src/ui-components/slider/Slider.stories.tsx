import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Slider } from '.';

import '../../theme/globals.scss';
import styles from './styles.module.scss';

export default {
  title: 'UI/Slider',
  component: Slider,
  argTypes: {
    data: {
      control: 'object',
      defaultValue: [],
    },
  },
} as Meta<typeof Slider>;

const Template: StoryFn<typeof Slider> = (args) => (
  <div className={styles.wrapperStory}>
    <Slider {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      id: 1,
      author: 'John Doe',
      city: 'New York, USA',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfF1tNyfdpPyKNQTlqYEM4T-jhdcuNY61mJQ&s',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero nec elit tincidunt venenatis. Sed a vestibulum tortor.',
    },
    {
      id: 2,
      author: 'Jane Mile',
      city: 'Minsk, Belarus',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS60Q0HVRXcJDXj3l6ZadnZpETkgVYKwRzEgA&s',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer eu feugiat ex.',
    },
    {
      id: 3,
      author: 'Alex Bred',
      city: 'Berlin, Germany',
      image: 'https://avatars.mds.yandex.net/get-shedevrum/11511289/cc2855ebcbb411eea6ebbaaee90618f0/orig',
      content: 'Oops, habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer eu feugiat ex.',
    },
  ],
};
