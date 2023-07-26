import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Theme from './context/themecontext';
import AuthContextProvider from './context/authContext';
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";

// create QueryClient
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Theme>
<AuthContextProvider>
<QueryClientProvider client={queryClient}>

    <App />
    </QueryClientProvider>
</AuthContextProvider>
    </Theme>
 
);


