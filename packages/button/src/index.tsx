import * as React from 'react';
import {
  styled,
  space,
  position,
  componentStyles,
  ForwardRefComponent,
} from '@brennstoff/core';
import { StyledComponentProps } from 'styled-components';
import { SpaceProps, PositionProps } from 'styled-system';

export type InternalButtonProps = {
  className?: string;
  rounded?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  size?: string;
  stretched?: boolean;
  variant?: string;
  children: React.ReactNode;
};

export type BaseButtonProps = {
  className?: string;
  rounded?: boolean;
  size?: string;
  stretched?: boolean;
  variant?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
} & (
  | {
      children: React.ReactNode;
      label?: never;
    }
  | {
      children?: never;
      label: string;
      icon: React.ReactNode;
    }
);

const DEFAULT_TAG = 'button';

export type ButtonProps = StyledComponentProps<
  typeof DEFAULT_TAG,
  any,
  BaseButtonProps & SpaceProps & PositionProps,
  never
> &
  BaseButtonProps;

const StyledButton = styled.button<InternalButtonProps>`
${componentStyles('button', ['variant', 'size', 'stretched'])}
${space}
${position}
`;

const Button = React.forwardRef(
  ({ children, icon, label, ...restProps }: ButtonProps, forwardedRef) => {
    return (
      <StyledButton {...restProps} aria-label={label} ref={forwardedRef}>
        {icon}
        {children}
      </StyledButton>
    );
  },
) as ForwardRefComponent<typeof DEFAULT_TAG, ButtonProps>;

Button.defaultProps = {
  as: DEFAULT_TAG,
  size: 'm',
  variant: 'secondary',
  type: 'button',
};

export default Button;
