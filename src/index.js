import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
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
    element: <EventPage  />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
