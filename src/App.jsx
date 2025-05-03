import React from 'react';
import './App.css';
import PersonList from './pages/Person/PersonList';
import { createBrowserRouter, RouterProvider } from "react-router";

const App = () => {

  const router = createBrowserRouter([

    { path: "/", element: <PersonList /> },

  ]);
  return (

    <RouterProvider router={router} />
    
  );
};

export default App;
