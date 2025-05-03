import React from 'react';
import './Header.css';
import { NavLink } from 'react-router';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">HR<span>Pro</span></h1>
        <nav className="nav">
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink></li>
            <li><NavLink to="/employees" className={({ isActive }) => isActive ? 'active' : ''}>Employees</NavLink></li>
            <li><NavLink to="/add-employee" className={({ isActive }) => isActive ? 'active' : ''}>Add Employees</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
