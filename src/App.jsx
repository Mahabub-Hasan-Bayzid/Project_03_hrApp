import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import PersonList from "./components/person/Person";
import Layout from "./components/Layout";
import AboutPage from "./pages/About/About";
import Root from "./pages/Root/Root";
import AddEmployee from "./components/PersonForm/AddEmployee";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/employees/")
      .then((res) => setEmployeeData(res.data))
      .catch((error) => console.log(error));
  }, []);

  const addEmployeeHandler = (newEmployee) => {
    setEmployeeData((prev) => [...prev, { ...newEmployee, id: Date.now() }]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Root /> },
        {
          path: "/employees",
          element: (
            <PersonList
              employeeData={employeeData}
              setEmployeeData={setEmployeeData}
            />
          ),
        },
        {
          path: "/add-employee",
          element: <AddEmployee onAddEmployee={addEmployeeHandler} />,
        },
        { path: "/about", element: <AboutPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
