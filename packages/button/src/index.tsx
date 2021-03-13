import { styled, space, position, componentStyles } from '@brennstoff/core';

// @ts-ignore
export default styled.button`
${componentStyles('button', ['variant', 'size', 'stretched'])}
${space}
${position}
`;
