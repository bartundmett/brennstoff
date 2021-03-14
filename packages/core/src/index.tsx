import * as React from 'react';
import {
  createGlobalStyle,
  StyledInterface,
  ThemeProvider,
} from 'styled-components';
import { variant } from 'styled-system';
import styledComponents from 'styled-components';
import * as system from 'styled-system';

export * from './forward-ref-component';
export { default as themeget } from '@styled-system/theme-get';

export const compose = system.compose;
export const space = system.space;
export const position = system.position;
export const styled: StyledInterface = styledComponents;

const GlobalStyles = createGlobalStyle`
`;

export function sharedStyles(component: string) {
  return (props: any) => props.theme.components[component].shared;
}

export function variantStyles(component: string, prop: string) {
  return variant({
    scale: `components.${component}.${prop}`,
    prop,
    variants: {},
  });
}

export function componentStyles(
  component: string,
  variants: Array<string>,
): Array<any> {
  const styles = [sharedStyles(component)];
  variants.forEach(variant => {
    styles.push(variantStyles(component, variant));
  });

  return styles;
}

export function Brennstoff({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: any;
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
