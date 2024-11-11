import { Components, Theme } from '@mui/material';

type MuiLinkComponentStyle = Components<Omit<Theme, 'components'>>['MuiLink'];

export type { MuiLinkComponentStyle };
