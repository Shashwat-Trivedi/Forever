import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Orders from './pages/Orders';
import List from './pages/List';
import Add from './pages/Add';

const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    children: [
      { path: "orders", element: <Orders /> },
      { path: "list", element: <List /> },
      { path: "add", element: <Add /> },
    ],

  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
