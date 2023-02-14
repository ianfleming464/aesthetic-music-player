import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { appTheme, darkTheme } from './theme';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={appTheme}>
        {/* <ThemeProvider theme={darkTheme}> */}
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
