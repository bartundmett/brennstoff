import theme, { ThemeProvider } from '@brennstoff/basetheme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  playroom: {
    url: 'http://localhost:9000',
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
