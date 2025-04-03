import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


import { createBrowserRouter, RouterProvider } from 'react-router-dom';




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
