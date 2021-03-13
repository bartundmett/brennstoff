import * as React from 'react';
import styled from 'styled-components';
import { space, layout, variant } from 'styled-system';

export interface IButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: string;
  as?: React.ElementType;
  onClick?: (event: React.MouseEvent | React.TouchEvent) => void;
}

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    defaultValidatorFn(prop) && !['display', 'fontSize'].includes(prop),
})(
  space,
  layout,
  variant({
    scale: 'buttons',
  }),
);

export function Button({
  variant = 'primary',
  as = 'button',
  className,
  onClick,
  children,
}: IButtonProps) {
  return (
    <StyledButton
      variant={variant}
      as={as}
      children={children}
      className={className}
      onClick={onClick}
    />
  );
}

export default Button;
