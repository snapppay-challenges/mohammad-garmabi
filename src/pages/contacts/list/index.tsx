import NoData from '@/components/no-data';
import PassengerCard from '@/components/passenger-card';
import ContainerLayout from '@/layout/container';
import { Divider, Pagination, Stack, Typography } from '@mui/material';
import React from 'react';
import FilterSection from './components/filters';
import PapularPassenger from '@/components/most-view-passenger';
import { PassengerCardSkeleton } from '@/components/passenger-card/passenger-card.skeleton';
import useContactLogical from './contact.hook';

const HomePage = () => {
  const { data, isLoading, handleChangePage, filter, isMobile } = useContactLogical();

  return (
    <>
      <ContainerLayout
        maxWidth="xl"
        sx={{
          borderRadius: (theme) => theme.shape.borderRadius,
          width: 1,
          bgcolor: (theme) => theme.palette.grey['100'],
          border: (theme) => `1px dashed ${theme.palette.grey['300']}`,
          p: 3,
        }}
      >
        <FilterSection />
      </ContainerLayout>

      <ContainerLayout
        maxWidth="xl"
        sx={{
          borderRadius: (theme) => theme.shape.borderRadius,
          width: 1,
          bgcolor: (theme) => theme.palette.grey['100'],
          border: (theme) => `1px dashed ${theme.palette.grey['300']}`,
          p: 3,
        }}
      >
        <PapularPassenger />
        <Typography>Passenger List</Typography>
        <Divider sx={{ my: 3 }} />
        <Stack direction="row" gap={3} justifyContent="space-evenly" flexWrap="wrap">
          {isLoading &&
            React.Children.toArray(Array.from({ length: 30 }, () => <PassengerCardSkeleton />))}

          {data?.items?.length === 0 && <NoData />}

          {React.Children.toArray(data?.items?.map((item) => <PassengerCard {...item} />))}
        </Stack>

        <Stack
          direction="row"
          justifyContent="center"
          mt={3}
          sx={{
            display: Math.ceil((data?.meta?.total ?? 0) / filter.limit) <= 1 ? 'none' : 'flex',
          }}
        >
          <Pagination
            count={Math.ceil((data?.meta?.total ?? 0) / filter.limit)}
            size={isMobile ? 'small' : 'large'}
            color="primary"
            page={filter.offset === 0 ? 1 : filter.offset}
            onChange={handleChangePage}
          />
        </Stack>
      </ContainerLayout>
    </>
  );
};
export default HomePage;
