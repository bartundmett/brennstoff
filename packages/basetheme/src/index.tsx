export { ThemeProvider } from 'styled-components';

const generateScale = (
  steps: number = 20,
  unit: string = 'rem',
  increase: number = 0.125,
) => {
  const scale = Array.from(Array(steps).keys());
  return scale.map((_, i) => {
    const value = i * increase;
    return `${value}${unit}`;
  });
};

const breakpoints = ['40em', '52em', '64em'];

const space = generateScale(90, 'rem', 0.25);

const fontSizes: any = generateScale(40, 'rem');
fontSizes.sm = fontSizes[10];
const lineHeights = generateScale(40, 'rem');

const radii: any = [0, '0.25rem', '0.5rem', '0.75rem', '1rem'];
radii.full = '100%';

const borders = [0, 1, 2, 4];

const shadows: any = [
  '0 0 #000',
  '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
];
shadows.sm = shadows[1];
shadows.md = shadows[2];
shadows.lg = shadows[3];
shadows.xl = shadows[4];

const colors = {
  black: '#000e1a',
  primary: '#007ce8',
  white: '#fff',
  blue: '#007ce0',
  navy: '#004175',
  indigo: '#4F46E5',
  indigos: {
    '50': '#EEF2FF',
    '100': '#E0E7FF',
    '200': '#C7D2FE',
    '300': '#A5B4FC',
    '400': '#818CF8',
    '500': '#6366F1',
    '700': '#4338CA',
    '800': '#3730A3',
    '900': '#312E81',
  },
};

export default {
  colors,
  breakpoints,
  space,
  radii,
  shadows,
  borders,
  fontSizes,
  lineHeights,
  buttons: {
    primary: {
      color: 'white',
      backgroundColor: 'red',
    },
    secondary: {
      color: 'white',
      backgroundColor: 'tomato',
    },
    tertiary: {
      color: 'black',
      backgroundColor: 'red',
      '&:hover': {
        backgroundColor: 'yellow',
        color: 'blue',
      },
    },
  },
};
