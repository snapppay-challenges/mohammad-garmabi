import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type UseCustomMediaQuery = {
  isTablet: boolean;
  isMobile: boolean;
  isDesktop: boolean;
  isOnlyLg: boolean;
};

const useCustomMediaQuery = (): UseCustomMediaQuery => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isOnlyLg = useMediaQuery(theme.breakpoints.only('lg'));

  return { isTablet, isMobile, isDesktop, isOnlyLg };
};

export default useCustomMediaQuery;
