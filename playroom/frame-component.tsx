import * as React from 'react';
import { Brennstoff } from '@brennstoff/core';

export default function FrameComponent({ theme, children }) {
  return React.createElement(Brennstoff, { theme, children });
}
