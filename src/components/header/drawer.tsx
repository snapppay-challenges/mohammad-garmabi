import { useLocation } from 'react-router-dom';
import MenuList from './menu-list';
import { Box, darken, Drawer, drawerClasses } from '@mui/material';

interface DrawerMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function DrawerMenu(props: DrawerMenuProps) {
  const { open, onClose } = props;
  const { pathname } = useLocation();

  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={onClose}
      sx={{
        [`& .${drawerClasses.paper}`]: {
          bgcolor: ({ palette }) => darken(palette.primary.dark, 0.9),
          borderRadius: '0px 0px 25px 25px',
          p: 2,
        },
      }}
    >
      <Box sx={{ marginTop: '20px' }}>
        <MenuList pathname={pathname} />
      </Box>
    </Drawer>
  );
}
