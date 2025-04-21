import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import './index.css';
import App from './App.jsx';
import '@fontsource/inter';
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import Home from './Screens/Home.jsx';
import Service from './Screens/Services.jsx';
import About from './Screens/About.jsx';
import Work from './Screens/Work.jsx';
import Insights from './Screens/Insights.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> }, 
      { path: "/service", element: <Service /> }, 
      { path: "/Work", element: <Work /> }, 
      { path: "/about", element: <About /> }, 
      { path: "/Insights", element: <Insights /> }, 
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
