import ContainerLayout from '@/layout/container';
import useContactDetailLogical from './contact-detail.hook';
import SplashScreen from '@/components/splash-screen';
import { Avatar, Divider, Link, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';

const ContactDetail = () => {
  const { data, isLoading, renderDetails } = useContactDetailLogical();

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <ContainerLayout maxWidth="xl">
      <Grid container spacing={2}>
        <Grid
          size={{ xs: 12, md: 3 }}
          sx={{
            borderRadius: (theme) => theme.shape.borderRadius,
            width: 1,
            bgcolor: (theme) => theme.palette.grey['100'],
            border: (theme) => `1px dashed ${theme.palette.grey['300']}`,
            p: 3,
          }}
        >
          <Stack spacing={3}>
            <Stack direction="row" spacing={1}>
              <Avatar
                variant="square"
                src={data?.avatar}
                sx={{
                  width: {
                    xs: 90,
                    md: 120,
                  },
                  height: {
                    xs: 90,
                    md: 120,
                  },
                  borderRadius: (theme) => theme.shape.borderRadius,
                  border: (theme) => `1px dashed ${theme.palette.grey['300']}`,
                }}
              />
              <Stack justifyContent="space-evenly">
                <Typography variant="h6">{`${data?.first_name} ${data?.last_name}`} </Typography>
                <Typography
                  variant="caption"
                  component={Link}
                  fontWeight={500}
                  href={`mailto:${data?.email}`}
                  style={{ wordWrap: 'break-word' }}
                >
                  {data?.email}
                </Typography>
                <Typography
                  variant="caption"
                  component={Link}
                  fontWeight={500}
                  href={`tel:${data?.phone}`}
                >
                  {data?.phone}
                </Typography>
              </Stack>
            </Stack>
            <Typography variant="body1">{data?.note}</Typography>
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 12, md: 9 }}
          sx={{
            borderRadius: (theme) => theme.shape.borderRadius,
            width: 1,
            bgcolor: (theme) => theme.palette.grey['100'],
            border: (theme) => `1px dashed ${theme.palette.grey['300']}`,
            p: 3,
          }}
        >
          <Stack
            justifyContent="center"
            height="100%"
            divider={<Divider flexItem sx={{ my: 3 }} />}
          >
            {React.Children.toArray(
              renderDetails.map((detail) => (
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Stack direction="row" spacing={2}>
                    {React.cloneElement(detail.icon)}
                    <Typography variant="subtitle1">{detail.title}</Typography>
                  </Stack>
                  <Typography variant="body1">{detail.value}</Typography>
                </Stack>
              ))
            )}
          </Stack>
        </Grid>
      </Grid>
    </ContainerLayout>
  );
};
export default ContactDetail;
