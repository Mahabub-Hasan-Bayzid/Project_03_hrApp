import React from 'react';
import './Person.css';

const Person = ({ name, title, salary, phone, email, location, department }) => {
  return (
    <div className="person-card">
      <div className="person-card-header">
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
      <div className="person-body">
        <p><strong>Salary:</strong> {salary}$</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Department:</strong> {department}</p>
      </div>
    </div>
  );
};

export default Person;
