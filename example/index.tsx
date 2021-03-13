import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '@brennstoff/button';
import { Brennstoff } from '@brennstoff/core';
import defaultTheme from '@brennstoff/basetheme';

const App = () => {
  return (
    <Brennstoff theme={defaultTheme}>
      <Button>Test Button</Button>
    </Brennstoff>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
