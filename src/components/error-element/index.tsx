import { useNavigate, useRouteError } from 'react-router-dom';
import { Box, Typography, Button, Container } from '@mui/material';
import paths from '@/routes/paths';

interface ErrorResponse {
  status: number;
  statusText: string;
  message?: string;
}

export default function ErrorElement() {
  const error = useRouteError() as ErrorResponse;
  const navigate = useNavigate();

  return (
    <Container>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" color="error" fontWeight="bold">
          Oops!
        </Typography>
        <Typography variant="h4" sx={{ mt: 2 }} fontWeight="medium">
          {error.status} - {error.statusText}
        </Typography>
        {error.message && (
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            {error.message}
          </Typography>
        )}
        <Button
          variant="contained"
          onClick={() =>
            navigate({
              pathname: paths.contacts(),
            })
          }
          sx={{ mt: 3 }}
        >
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
}
