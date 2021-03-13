import { colors, typography, space } from '../tokens';

export default {
  shared: {
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    cursor: 'pointer',
    fontFamily: typography.fontFamilies.sans,
    fontWeight: typography.fontWeight.bold,
    '&:focus': {
      outline: 'none',
    },

    textTransform: 'uppercase',
    paddingLeft: space[8],
    paddingRight: space[8],
  },
  stretched: {
    true: {
      width: '100%',
    },
  },
  variant: {
    primary: {
      color: colors.white,
      backgroundColor: colors.primary,
      '&:hover': {
        backgroundColor: colors.primaryDark,
      },
      '&[disabled]': {
        cursor: 'not-allowed',
        background: colors.coolGray[300],
        color: colors.coolGray[500],
      },
    },
    secondary: {
      color: colors.white,
      backgroundColor: colors.secondary,
      '&:hover': {
        backgroundColor: colors.secondaryDark,
      },
      '&[disabled]': {
        cursor: 'not-allowed',
        background: colors.coolGray[300],
        color: colors.coolGray[500],
      },
    },
    inverted: {
      color: colors.white,
      backgroundColor: 'transparent',
      borderColor: colors.primary,
      borderWidth: space.px,
      borderStyle: 'solid',
      '&[disabled]': {
        cursor: 'not-allowed',
        borderColor: colors.coolGray[300],
        color: colors.coolGray[500],
      },
    },
  },
  size: {
    xs: {
      fontSize: typography.fontSizes['2xs'],
      height: '32px',
    },
    s: {
      fontSize: typography.fontSizes.sm,
      height: '40px',
    },
    m: {
      fontSize: typography.fontSizes.sm,
      height: '48px',
    },
    l: {
      fontSize: typography.fontSizes.base,
      height: '56px',
      paddingLeft: space[10],
      paddingRight: space[10],
    },
  },
};
