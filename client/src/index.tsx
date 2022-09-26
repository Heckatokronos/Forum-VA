import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
<<<<<<< HEAD
=======
import { QueryClient, QueryClientProvider } from 'react-query';
>>>>>>> butt

const container = document.getElementById('root')!;
const root = createRoot(container);

const queryClient = new QueryClient()

root.render(
  <Router>
<<<<<<< HEAD
    <Provider store={store}>
      <App />
    </Provider>
=======
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
>>>>>>> butt
  </Router>
);
