import React from 'react';
import { Story, Meta } from '@storybook/react';

import SolutionDropdown from '../components/SolutionDropdown';

export default {
  title: 'Component/SolutionDropdown',
  component: SolutionDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <SolutionDropdown {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  primary: true,
  label: 'Button',
};
