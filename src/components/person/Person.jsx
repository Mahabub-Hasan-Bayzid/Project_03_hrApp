import React from "react";
import Person from "./PersonCard";
import "./PersonList.css";
import { useEffect, useState } from "react";
import axios from "axios";

const PersonList = () => {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/employees/")
      .then((res) => setEmployeeData(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="app">
        <main className="person-grid">
          {employeeData.map((employee) => (
            <Person
              key={employee.id}
              name={employee.name}
              title={employee.title}
              salary={employee.salary}
              phone={employee.phone}
              email={employee.email}
              location={employee.location}
              department={employee.department}
              animal={employee.animal}
              startDate={employee.startDate}
            />
          ))}
        </main>
      </div>
    </>
  );
};

export default PersonList;
