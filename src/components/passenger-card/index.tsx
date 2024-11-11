import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { ArrowCircleRight, Call, Share } from 'iconsax-react';
import { Box, Divider, Link, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import paths from '@/routes/paths';
import { PassengerCardProps } from './passenger-card.types';
import { TelegramSVG } from '@/assets/svg';
import usePassengerCardLogical from './passenger-card.hook';

export default function PassengerCard(props: PassengerCardProps) {
  const { address, avatar, ...rest } = props;

  const { handleNavigateToDetails, handleNavigateToTelegram, handleShareContent } =
    usePassengerCardLogical(props);

  return (
    <Box
      sx={{
        position: 'relative',
        width: {
          xs: '100%',
          md: '100%',
          lg: 'unset',
        },
      }}
    >
      <Card
        sx={{
          maxWidth: {
            xs: '100%',
            md: '100%',
            lg: 270,
          },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          textDecoration: 'none',
          borderRadius: (theme) => theme.shape.borderRadius,
          boxShadow: 0,
          '&:hover': {
            boxShadow: 14,
          },
        }}
        component={NavLink}
        to={paths.contactID(String(rest.id))}
      >
        <CardHeader
          avatar={<Avatar src={avatar} sx={{ boxShadow: 1 }} />}
          title={
            <Typography variant="subtitle1">{`${rest.first_name} ${rest.last_name}`}</Typography>
          }
          subheader={
            <Stack direction="row" spacing={1} alignItems="baseline">
              <Typography variant="overline" sx={{ color: 'text.primary' }}>
                Phone:
              </Typography>
              <Link href={`tel:${rest.phone}`}>
                <Typography variant="overline">{rest.phone}</Typography>
              </Link>
            </Stack>
          }
        />
        <CardContent sx={{ display: 'flex' }}>
          <Stack>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              <b>Address:</b> {address ?? '-'}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="caption" sx={{ color: 'text.primary', fontWeight: 500 }}>
              <b>Note:</b> {rest.note ?? '-'}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions disableSpacing>
          <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
            <Stack direction="row">
              {rest.telegram && (
                <IconButton
                  aria-label="Telegram"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigateToTelegram();
                  }}
                >
                  <img src={TelegramSVG} alt="telegram" style={{ width: 24 }} />
                </IconButton>
              )}
              <IconButton
                aria-label="share"
                onClick={(e) => {
                  e.preventDefault();
                  handleShareContent();
                }}
              >
                <Share />
              </IconButton>
              {rest.phone && (
                <Link href={`tel:${rest.phone}`}>
                  <IconButton>
                    <Call />
                  </IconButton>
                </Link>
              )}
            </Stack>
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                handleNavigateToDetails();
              }}
            >
              <ArrowCircleRight />
            </IconButton>
          </Stack>
        </CardActions>
      </Card>
    </Box>
  );
}
