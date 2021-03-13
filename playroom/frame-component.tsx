import * as React from 'react';
import { ThemeProvider } from '@brennstoff/theme';

export default function FrameComponent({ theme, children }) {
  return React.createElement(ThemeProvider, { theme, children });
}
