import React, { useState } from 'react';
import './Dropdown.css'; // Create a CSS file for styling

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Select an option <i className={`fas fa-caret-${isOpen ? 'up' : 'down'}`}></i>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#"><i className="fas fa-home"></i> Home</a>
          <a href="#"><i className="fas fa-user"></i> Profile</a>
          <a href="#"><i className="fas fa-cog"></i> Settings</a>
          <a href="#"><i className="fas fa-sign-out-alt"></i> Logout</a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;