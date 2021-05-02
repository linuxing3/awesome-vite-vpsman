import React from 'react';
import { Story, Meta } from '@storybook/react';

import HeaderBanner, { HeadBannerProps } from '../components/HeadBanner';

export default {
  title: 'Component/HeaderBanner',
  component: HeaderBanner,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<HeadBannerProps> = (args) => <HeaderBanner {...args} />;

export const Indigo = Template.bind({});
Indigo.args = {
  primary: true,
  label: 'Button',
  backgroundColor: "bg-indigo-600"
};

export const Purple = Template.bind({});
Purple.args = {
  primary: true,
  label: 'Button',
  backgroundColor: "bg-purple-600"
};

export const Red = Template.bind({});
Red.args = {
  primary: true,
  label: 'Button',
  backgroundColor: "bg-red-600"
};
