import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { employees } from '../../data/employee';
import Person from './PersonCard';
import './PersonList.css';

const PersonList = () => {
  return (
    <>
      <Header />
      <div className="app">
        <main className="person-grid">
          {employees.map(employee => (
            <Person
              key={employee.id}
              name={employee.name}
              title={employee.title}
              salary={employee.salary}
              phone={employee.phone}
              email={employee.email}
              location={employee.location}
              department={employee.department}
            />
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default PersonList;
