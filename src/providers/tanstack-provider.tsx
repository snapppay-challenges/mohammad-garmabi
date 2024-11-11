import React, { PropsWithChildren, useMemo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const TanstackProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // Create a client
  const queryClient = useMemo(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
          retry: 0,
          refetchOnMount: false,
          retryOnMount: false,
          // set Global cache time access to env file
          staleTime: +process.env.REACT_APP_CACHE_APIS!,
          gcTime: +process.env.REACT_APP_CACHE_APIS!,
        },
      },
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default TanstackProvider;
