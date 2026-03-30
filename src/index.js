import React from 'react';
import ReactDOM from 'react-dom/client';
import { routerPC, routerMb } from './router/index.js'
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const width = document.documentElement.scrollWidth;

root.render(
  <React.StrictMode>
    <RouterProvider router={width < 1200 ? routerMb : routerPC}></RouterProvider>
  </React.StrictMode>
);

