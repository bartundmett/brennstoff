import { styled, space, position, componentStyles } from '@brennstoff/core';
import { StyledComponentProps } from 'styled-components';
import { SpaceProps, PositionProps } from 'styled-system';

export type BaseButtonProps = {
  className?: string;
  children?: React.ReactNode;
  rounded?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  size?: string;
  stretched?: boolean;
  variant?: string;
};

export type ButtonProps = StyledComponentProps<
  'button',
  any,
  BaseButtonProps & SpaceProps & PositionProps,
  never
>;

// @ts-ignore
export default styled.button<ButtonProps>`
${componentStyles('button', ['variant', 'size', 'stretched'])}
${space}
${position}
`;
