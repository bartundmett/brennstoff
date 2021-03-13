import { Brennstoff } from '@brennstoff/core';
import baseTheme from '@brennstoff/basetheme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  playroom: {
    url: 'http://localhost:9000',
  },
};

export const decorators = [
  (Story) => (
    <Brennstoff theme={baseTheme}>
      <Story />
    </Brennstoff>
  ),
];
