import * as React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import {
  Brennstoff,
  sharedStyles,
  variantStyles,
  styled,
  componentStyles,
} from '../src';

const testTheme = {
  components: {
    test: {
      shared: {
        color: 'white',
      },
      size: {
        s: {
          fontSize: '13px',
        },
        m: {
          fontSize: '14px',
        },
      },
      variant: {
        primary: {
          backgroundColor: 'red',
        },
        secondary: {
          backgroundColor: 'green',
        },
      },
    },
  },
};

describe('@brennstoff/basetheme', () => {
  it('works', () => {
    expect(true).toBe(true);
  });
});

describe('sharedStyles helper', () => {
  it('renders shared styles from theme', () => {
    const shared = sharedStyles('test');
    expect(
      shared({
        theme: testTheme,
      }),
    ).toEqual({
      color: 'white',
    });
  });
});

describe('variants helper', () => {
  it('forwards themed variants to component styles', () => {
    const variants = variantStyles('test', 'size');
    const Component = styled.div<{ size: 's' | 'm' }>`
      ${variants}
    `;
    const { container, rerender } = render(
      <Brennstoff theme={testTheme}>
        <Component size="m">Test</Component>
      </Brennstoff>,
    );
    expect(container.firstChild).toHaveStyleRule('font-size', '14px');

    rerender(
      <Brennstoff theme={testTheme}>
        <Component size="s">Test</Component>
      </Brennstoff>,
    );

    expect(container.firstChild).toHaveStyleRule('font-size', '13px');
  });
});

describe('componentStyles helper', () => {
  it('combines shared and all variants', () => {
    const styles = componentStyles('test', ['size', 'variant']);
    const Component = styled.div<{
      size: 's' | 'm';
      variant: 'primary' | 'secondary';
    }>`
      ${styles}
    `;
    const { container, rerender } = render(
      <Brennstoff theme={testTheme}>
        <Component size="m" variant="primary">
          Test
        </Component>
      </Brennstoff>,
    );
    expect(container.firstChild).toHaveStyleRule('font-size', '14px');

    rerender(
      <Brennstoff theme={testTheme}>
        <Component size="s" variant="secondary">
          Test
        </Component>
      </Brennstoff>,
    );

    expect(container.firstChild).toHaveStyleRule('font-size', '13px');
  });
});

describe('themeprovider', () => {
  it('renders with provider', () => {
    const { container } = render(<Brennstoff theme={{}}>test</Brennstoff>);
    expect(container).toMatchSnapshot();
  });
});
