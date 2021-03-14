import { AppProps } from 'next/dist/next-server/lib/router/router';
import { Brennstoff } from '@brennstoff/core';
import baseTheme from '@brennstoff/basetheme';

function App({ Component, pageProps }: AppProps) {
  return (
    <Brennstoff theme={baseTheme}>
      <Component {...pageProps} />
    </Brennstoff>
  );
}

export default App;
