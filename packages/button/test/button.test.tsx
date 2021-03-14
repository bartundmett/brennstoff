import * as React from 'react';
import 'jest-axe/extend-expect';
import 'jest-styled-components';
import { axe } from 'jest-axe';
import { cleanup, fireEvent, render } from '@testing-library/react';

import Button from '../src';
import { Brennstoff } from '@brennstoff/core';
import defaultTheme from '@brennstoff/basetheme';

function Wrappers({ children }: { children: React.ReactNode }) {
  return <Brennstoff theme={defaultTheme}>{children}</Brennstoff>;
}
const customRender = (ui: JSX.Element, options: any = {}) =>
  render(ui, { wrapper: Wrappers, ...options });

describe('Button', () => {
  afterEach(cleanup);

  test('should have no accessibility violations', async () => {
    const { container, getByTestId } = customRender(
      <Button data-testid="button-test" label="" icon={<span>icon</span>} />,
    );

    fireEvent.click(getByTestId('button-test'));
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });

  test('basic', () => {
    const { container } = customRender(<Button>Button Test</Button>);
    expect(container).toMatchSnapshot();
  });

  test('is polymorphic', () => {
    const { container } = customRender(
      <Button as="a" href="#">
        Button Test
      </Button>,
    );
    expect(container.querySelector('a')).not.toBeNull();
    expect(container).toMatchSnapshot();
  });
});
