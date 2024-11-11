import Header from '@/components/header';
import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <Stack
      component={'main'}
      justifyContent="space-between"
      sx={{
        bgcolor: ({ palette }) => palette.grey['200'],
      }}
      minHeight="100vh"
      width="100%"
    >
      <Header />
      <Stack flex={1} my={3} justifyContent="center">
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default MainLayout;
