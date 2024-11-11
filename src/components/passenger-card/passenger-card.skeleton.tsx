import { Card, CardContent, Skeleton, Stack } from '@mui/material';

export const PassengerCardSkeleton = () => {
  return (
    <Card
      sx={{
        width: {
          xs: '100%',
          md: 270,
        },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textDecoration: 'none',
        borderRadius: (theme) => theme.shape.borderRadius,
        boxShadow: 0,
        '&:hover': {
          boxShadow: 24,
        },
      }}
    >
      <CardContent>
        <Stack spacing={2}>
          <Skeleton variant="rectangular" width="100%" height={20} />
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="circular" width={40} height={40} />
          <Stack direction="row" spacing={2}>
            <Stack spacing={1} flex={1}>
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="40%" />
            </Stack>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Skeleton variant="text" width="30%" />
            <Skeleton variant="text" width="20%" />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
