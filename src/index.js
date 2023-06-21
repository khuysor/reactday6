import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import {theme} from './theme'
import { ContextProvider } from './context/darkmode';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
    </ContextProvider>
  
  </React.StrictMode>
);

