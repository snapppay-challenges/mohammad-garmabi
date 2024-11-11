import { Container, ContainerProps } from '@mui/material';

const ContainerLayout: React.FC<ContainerProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest} sx={{ ...rest?.sx, margin: '0 auto' }}>
      {children}
    </Container>
  );
};

export default ContainerLayout;
