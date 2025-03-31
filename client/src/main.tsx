import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';

import ErrorPage from './pages/ErrorPage.tsx';
import Home from './pages/HomePage.tsx';
import Login from './pages/Login.tsx';
import RentPage from './pages/RentPage.tsx';
import BuyPage from './pages/BuyPage.tsx';
import SellPage from './pages/SellPage.tsx';
import PropertyDetail from './pages/PropertyDetail.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/login',
        element: <Login />
      }, 
      {
        path: '/rent',
        element: <RentPage />
      },
      {
        path: '/buy',
        element: <BuyPage />
      },
      {
        path: '/sell',
        element: <SellPage />
      },
      {
        path: '/property/:id',
        element: <PropertyDetail />
      },
    ]
  }
])

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
