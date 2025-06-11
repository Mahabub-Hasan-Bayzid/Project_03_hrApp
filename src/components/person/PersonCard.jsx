import React from "react";
import "./Person.css";
import { useState } from "react";

const Person = ({
  name,
  title,
  salary,
  phone,
  email,
  location,
  department,
  startDate,
  animal,
  onHandleDelete,
  id,
  onHandleEdit,
}) => {
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
    Panda: "🐼",
  };
  const [isVisible, setIsVisible] = useState(false);

  const emoji = animalEmojis[animal];
  return (
    <div
      className="person-card"
      id={`employee-${id}`}
      onMouseOver={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="person-card-header">
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
      <div className="person-body">
        <div className="person-info">
          <p>
            <strong>Salary:</strong> {salary}$
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Location:</strong> {location}
          </p>
          <p>
            <strong>Department:</strong> {department}
          </p>
          <p>
            <strong>Working:</strong> {diff} Years
          </p>
          <p>
            <strong>Favourite Animal:</strong> {emoji}
          </p>
          {showRecognition && (
            <div className="recognition">🎉 Schedule recognition meeting.</div>
          )}
          {showProbation && (
            <div className="reminder">🔔 Schedule probation review.</div>
          )}
        </div>
        <div className="action">
          {isVisible && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#75FBFD"
                onClick={() => onHandleEdit(id)}
              >
                <path d="M480-240Zm-320 80v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q37 0 73 4.5t72 14.5l-67 68q-20-3-39-5t-39-2q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32h240v80H160Zm400 40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-340L683-120H560Zm300-263-37-37 37 37ZM620-180h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#75FBFD"
                onClick={() => onHandleDelete(id)}
              >
                <path d="M640-520v-80h240v80H640Zm-280 40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z" />
              </svg>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Person;
