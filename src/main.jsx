import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';
import { HomePage } from './pages/home-page';
import { MainLayout } from './layouts/main-layout';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        {
          element: <MainLayout />,
          children: [{ index: true, element: <HomePage /> }],
        },
      ])}
    />
  </React.StrictMode>
);
