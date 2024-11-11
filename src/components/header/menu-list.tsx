import { Link, Stack } from '@mui/material';
import { Cards, Home } from 'iconsax-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import paths from '@/routes/paths';

const headerMenu = [
  { label: 'Contacts', route: paths.contacts(), icon: <Home /> },
  {
    label: 'Page for test',
    route: paths.notFound(),
    icon: <Cards />,
  },
];

const MenuList = ({ pathname }: { pathname: string }) => {
  return (
    <>
      {headerMenu.map((page) => (
        <Link
          key={page.label}
          sx={{
            my: 2,
            mx: 2,
            color: pathname === page.route ? 'primary.main' : 'white',
          }}
          component={NavLink}
          to={page.route}
          {...(pathname === page.route && {
            color: 'primary',
          })}
        >
          <Stack gap={2} direction="row" alignItems="center">
            {React.cloneElement(page.icon, { style: { marginTop: '-5px' } })}
            {page.label}
          </Stack>
        </Link>
      ))}
    </>
  );
};

export default MenuList;
