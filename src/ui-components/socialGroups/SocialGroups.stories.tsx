import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { SocialGroups } from '.';

import '../../theme/globals.scss';

import Facebook from '#/public/image/svg/facebook.svg';
import Instagramm from '#/public/image/svg/instagramm.svg';
import LinkedIn from '#/public/image/svg/linkedIn.svg';
import Twitter from '#/public/image/svg/twitter.svg';

export default {
  title: 'UI/SocialGroups',
  component: SocialGroups,
  argTypes: {
    data: {
      control: 'object',
      defaultValue: [],
    },
  },
} as Meta<typeof SocialGroups>;

const Template: StoryFn<typeof SocialGroups> = (args) => <SocialGroups {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      name: Facebook,
      path: 'https://www.facebook.com/ModsenSoftware/',
    },
    {
      name: Twitter,
      path: 'https://twitter.com/modsencompany?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
    },
    {
      name: Instagramm,
      path: 'https://www.instagram.com/modsencompany/',
    },
    {
      name: LinkedIn,
      path: 'https://www.linkedin.com/in/alexei-baranov/',
    },
  ],
};
