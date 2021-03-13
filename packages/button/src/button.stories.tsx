import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { IButtonProps } from '.';

export default {
  title: 'Test/ButtonTest',
  component: Button,
  parameters: {
    playroom: {
      code: '<Button>Hello Button</Button>',
    },
  },
} as Meta;

const Template: Story<IButtonProps> = args => <Button {...args} />;

export const NormalButton = Template.bind({});
NormalButton.args = {
  children: 'Button Label',
  variant: 'tertiary',
  as: 'a',
};

export const SecondButton = Template.bind({});
SecondButton.args = {
  children: 'Test Button',
  variant: 'primary',
};

export const ThidButton = Template.bind({});
ThidButton.args = {
  children: 'Test Button',
  variant: 'primary',
  as: 'a',
};
