import React from 'react';
import { Story, Meta } from '@storybook/react';

import Dropdown from '../components/Dropdown';

export default {
  title: 'Component/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <Dropdown {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  primary: true,
  label: 'Button',
};
