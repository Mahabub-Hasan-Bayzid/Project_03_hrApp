import React from 'react';
import './Person.css';

const Person = ({ name, title, salary, phone, email, location, department, startDate,animal }) => {
  const d1 = new Date(2025, 4, 3); 
  const d2 = new Date(startDate); 
  const dCalc = Math.abs((d1 - d2) / 31556952000); 
  const diff = Math.round(10 * dCalc) / 10; 

  const showRecognition = diff >= 5 && diff % 5 === 0;
  const showProbation = (d1 - d2) / (1000 * 60 * 60 * 24) < 183;

  const animalEmojis = {
    Owl: "🦉",
    Fox: "🦊",
    Cat: "🐱",
    Bear: "🐻",
    Dog: "🐶",
    Rabbit: "🐰",
    Lion: "🦁",
    Eagle: "🦅",
    Horse: "🐴",
    Panda: "🐼"
  };
  
  const emoji = animalEmojis[animal];
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
        <p><strong>Working:</strong> {diff} Years</p>
        <p><strong>Favourite Animal:</strong> {emoji}</p>
        {showRecognition && (
          <div className="recognition">
            🎉 Schedule recognition meeting.
          </div>
        )}
        {showProbation && (
          <div className="reminder">
            🔔 Schedule probation review.
          </div>
        )}
      </div>
    </div>
  );
};

export default Person;
