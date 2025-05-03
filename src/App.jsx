import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router";
import PersonList from './components/person/Person';
import Layout from './components/Layout';
import AboutPage from './pages/About/About';
import Root from './pages/Root/Root';
import AddEmployee from './components/PersonForm/AddEmployee';
import { useState } from 'react';
import { employees } from './data/employee';


const App = () => {

  const [employeeData, setEmployeeData]= useState(employees);

  const addEmployeeHandler=(newEmployee)=>{
    setEmployeeData((prev)=>[...prev, {...newEmployee,id:Date.now(),}])
  }

  const router = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        { index: true, element: <Root /> },
        { path: "/employees", element: <PersonList employeeData={employeeData} setEmployeeData={setEmployeeData}/> },
        { path: "/add-employee", element: <AddEmployee onAddEmployee={addEmployeeHandler}/> },
        { path: "/about", element: <AboutPage /> }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
