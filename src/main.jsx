import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
}
  from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Pages/Home.jsx';
import About from './components/Pages/About.jsx';
import Login from './components/Pages/Login.jsx';
import Registration from './components/Pages/Registration.jsx';
import Authprovider from './components/Authprovider/Authprovider.jsx';
import Order from './components/Pages/Order.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import Profile from './components/Pages/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'About',
        element: <About></About>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'registration',
        element: <Registration></Registration>
      },
      {
        path:'order',
        element:<PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path:'profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
)
