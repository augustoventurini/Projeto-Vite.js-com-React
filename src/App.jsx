import { useState } from 'react';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Chat from './routes/Chat';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
