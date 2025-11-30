import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Routes from './routes.jsx';
import Home from './pages/home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ShopContextProvider from './context/ShopContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Routes />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'collection',
        element: <Collection />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'product/:productid',
        element: <Product />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'place-order',
        element: <PlaceOrder />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  </StrictMode>
);
