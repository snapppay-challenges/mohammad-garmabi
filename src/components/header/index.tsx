import { AppBar, Box, Toolbar, IconButton, Typography, Link, darken } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { CloseCircle, HambergerMenu, ShoppingBag, TriangleLogo } from 'iconsax-react';
import React from 'react';
import ContainerLayout from '@/layout/container';
import paths from '@/routes/paths';
import DrawerMenu from './drawer';
import MenuList from './menu-list';

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <AppBar
      sx={{
        bgcolor: ({ palette }) => darken(palette.primary.dark, 0.9),
        boxShadow: open ? 5 : 0,
        borderRadius: '0px 0px 25px 25px',
        padding: (theme) => theme.spacing(2, 0),
        position: 'sticky',
        top: 0,
      }}
    >
      <ContainerLayout maxWidth="xl">
        <Toolbar disableGutters>
          <Link component={NavLink} to={paths.contacts()}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 10, display: { xs: 'none', md: 'flex' } }}
            >
              <TriangleLogo size={32} color="white" />
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleToggle}
              {...(open && {
                color: 'inherit',
              })}
              sx={{ color: (theme) => theme.palette.common.white }}
            >
              {open ? <CloseCircle /> : <HambergerMenu />}
            </IconButton>

            <DrawerMenu open={open} onClose={handleToggle} />
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <TriangleLogo size={24} color="white" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <MenuList pathname={pathname} />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0, color: (theme) => theme.palette.common.white }}>
              <ShoppingBag />
            </IconButton>
          </Box>
        </Toolbar>
      </ContainerLayout>
    </AppBar>
  );
};

export default Header;
