import React from 'react';
import { employees } from '../../data/employee';
import Person from './PersonCard';
import './PersonList.css';

const PersonList = ({employeeData,setEmployeeData}) => {
  return (
    <>
      <div className="app">
        <main className="person-grid">
          {employeeData.map(employee => (
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
