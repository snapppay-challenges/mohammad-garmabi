import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import mainRoutes from '@/routes';
import SplashScreen from '@/components/splash-screen';

const AppRouterProvider = () => {
  const appRoutes = React.useMemo(
    () =>
      createBrowserRouter([
        {
          path: '',
          element: <Outlet />,
          children: [
            ...mainRoutes,
            { path: '*', element: <>just a fallback for react-router-dom</> },
          ],
        },
      ]),
    []
  );

  return <RouterProvider router={appRoutes} fallbackElement={<SplashScreen />} />;
};

export default AppRouterProvider;
