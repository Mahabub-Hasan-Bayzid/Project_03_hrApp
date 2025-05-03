import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">HR<span>Pro</span></h1>
        <nav className="nav">
          <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/employees">Employees</a></li>
            <li><a href="/reports">Reports</a></li>
            <li><a href="/settings">Settings</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
