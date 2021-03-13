import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '@brennstoff/button';
import theme, { ThemeProvider } from '@brennstoff/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>Test Button</Button>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
