import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ServerErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      height={1}
      justifyContent="center"
      alignItems="center"
    >
      <Container maxWidth="md">
        <Typography variant="h1" align="center" color="textPrimary">
          500: Internal Server Error
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" sx={{ mt: 2 }}>
          Something went wrong on our servers. We are working to fix the problem.
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button color="primary" variant="contained" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServerErrorPage;
