module.exports = {
  components: './components.ts',
  outputPath: '../playroom-static',

  title: 'Brennstoff Playroom',
  frameComponent: './frame-component.tsx',
  themes: './themes.ts',
  typeScriptFiles: [
    './**/*.{ts,tsx}',
    '../packages/**/*.{ts,tsx}',
    '!**/node_modules',
  ],
  widths: [320, 768, 1024],
  port: 9000,
  openBrowser: false,
  paramType: 'search',
  exampleCode: `
    <Button>
      Hello World!
    </Button>
  `,
  baseUrl: '/playroom/',
  webpackConfig: () => ({}),
  iframeSandbox: 'allow-scripts',
};
