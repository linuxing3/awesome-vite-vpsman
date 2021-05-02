import React from 'react';
import { Story, Meta } from '@storybook/react';

import Avatar, { AvatarProps } from '../components/Avatar';

export default {
  title: 'Component/Avatar',
  component: Avatar,
  argTypes: {
    width: { control: 'color' },
    height: { control: 'color' },
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  width: 'w-6',
  height: 'h-6',
};

export const Medium = Template.bind({});
Medium.args = {
  width: 'w-8',
  height: 'h-8',
};

export const Large = Template.bind({});
Large.args = {
  width: 'w-10',
  height: 'h-10',
};
