import ReactDOM from 'react-dom/client';
import '@/assets/fonts/index.css';
import reportWebVitals from './reportWebVitals';
import TanstackProvider from './providers/tanstack-provider';
import SnackbarAppProvider from './providers/snackbar-app-provider';
import AppThemeProvider from './providers/app-theme-provider';
import AppRouterProvider from './providers/app-router-provider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <TanstackProvider>
    <AppThemeProvider>
      <SnackbarAppProvider>
        <AppRouterProvider />
      </SnackbarAppProvider>
    </AppThemeProvider>
  </TanstackProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
