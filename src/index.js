import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import './bootstrap.css'
import Home from '../src/pages/Home';
import About from './pages/about';
import Products from './pages/products';
const root = ReactDOM.createRoot(document.getElementById('root'));



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
