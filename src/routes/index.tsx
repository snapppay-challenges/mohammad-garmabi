import { RouteObject } from 'react-router-dom';
import NotFoundPage from '@/pages/not-found';
import ServerErrorPage from '@/pages/server-error';
import MainLayout from '@/layout/main';
import ErrorElement from '@/components/error-element';
import SplashScreen from '@/components/splash-screen';

const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('@/pages/contacts/list')).default,
          loader: () => <SplashScreen />,
        }),
      },
      {
        path: 'contacts/:id',
        lazy: async () => ({
          Component: (await import('@/pages/contacts/detail')).default,
          loader: () => <SplashScreen />,
        }),
      },
    ],
  },
  {
    path: '/500',
    element: <ServerErrorPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default mainRoutes;
