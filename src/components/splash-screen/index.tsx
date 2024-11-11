import { Backdrop, CircularProgress } from '@mui/material';

interface SplashScreenProps {
  open?: boolean;
}

export default function SplashScreen({ open = true }: SplashScreenProps) {
  return (
    <Backdrop
      open={open}
      sx={{
        background: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        color: '#000',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
