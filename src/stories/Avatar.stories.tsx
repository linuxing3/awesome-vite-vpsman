import React from 'react';
import { Story, Meta } from '@storybook/react';

import Avatar from '../components/Avatar';

export default {
  title: 'Component/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <Avatar {...args} />;

export const Album = Template.bind({});
Album.args = {
  primary: true,
  label: 'Button',
};
