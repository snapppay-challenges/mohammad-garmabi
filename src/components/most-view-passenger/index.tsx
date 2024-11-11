import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import PassengerCard from '../passenger-card';
import { useGetPassenger } from '@/hooks/queries/usePassengerQueries';
import { usePassengerStore } from '@/stores/usePassengerStore';
import { Trash } from 'iconsax-react';

const PapularPassenger = () => {
  const { data } = useGetPassenger();
  const { mostViewList, clearHistoryView } = usePassengerStore();
  //
  const sortedPassengersByViewCount = React.useMemo(() => {
    return data?.items
      .filter((item) => mostViewList.some((view) => view.id === item.id))
      .sort((a, b) => {
        const aViewCount = mostViewList.find((view) => view.id === a.id)?.count || 0;
        const bViewCount = mostViewList.find((view) => view.id === b.id)?.count || 0;
        return bViewCount - aViewCount;
      });
  }, [data?.items, mostViewList]); //

  const openingCollapse = sortedPassengersByViewCount
    ? sortedPassengersByViewCount?.length > 0
    : false;

  return (
    <Collapse in={openingCollapse}>
      <Card
        sx={{
          boxShadow: 0,
          border: 0,
          bgcolor: (theme) => theme.palette.grey['100'],
        }}
      >
        <CardHeader
          title={
            <Stack>
              <Typography>Most Viewed</Typography>
              <Divider sx={{ mt: 3 }} />
            </Stack>
          }
          action={
            <Tooltip title="Clear history">
              <IconButton onClick={clearHistoryView}>
                <Trash />
              </IconButton>
            </Tooltip>
          }
        />

        <CardContent>
          <Stack
            direction="row"
            gap={3}
            justifyContent="flex-start"
            sx={{
              padding: (theme) => theme.spacing(3, 0),
              overflowX: 'auto',
              '&::-webkit-scrollbar': {
                height: '2px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,0.2)',
                borderRadius: '4px',
              },
            }}
          >
            {React.Children.toArray(
              sortedPassengersByViewCount?.slice(0, 4).map((item) => <PassengerCard {...item} />)
            )}
          </Stack>
        </CardContent>
      </Card>
    </Collapse>
  );
};
export default PapularPassenger;
