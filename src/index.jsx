import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./normalize.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./Ai_Show.css";
import EventPage from './components/EventPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/eventPage/:id" element={<EventPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
