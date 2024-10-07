import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./Ai_Show.css";
import EventPage from './components/EventPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/eventPage/:id",
    element: <EventPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
