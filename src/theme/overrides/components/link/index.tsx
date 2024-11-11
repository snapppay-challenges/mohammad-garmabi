import { MuiLinkComponentStyle } from './link.types';

export default function MuiLink(): MuiLinkComponentStyle {
  return {
    defaultProps: {
      underline: 'none',
      variant: 'subtitle1',
      color: 'inherit',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        fontWeight: 500,
        transition: 'all .04s ease',
        backfaceVisibility: 'hidden',
        '&[active]': {
          color: theme.palette.primary.main,
          fontWeight: 'bold',
        },
        '&:hover': {
          color: theme.palette.primary['light'],
          fontWeight: 500,
        },
        '&[disabled]': {
          pointerEvents: 'none',
        },
      }),
    },
    variants: [],
  };
}
