import "./Root.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Root = () => {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/employees/")
      .then((res) => setEmployeeData(res.data));
  }, []);
  return (
    <div className="page-container">
      <h2>
        Welcome to HR<span>Pro</span> Dashboard
      </h2>
      <p>
        Your one-stop solution for managing employees, reports, and settings.
      </p>
      <div className="dashboard-widgets">
        <div className="widget">Total Employees: {employeeData.length}</div>
        <div className="widget">Open Positions: 5</div>
        <div className="widget">Pending Reports: 3</div>
      </div>
    </div>
  );
};
export default Root;
