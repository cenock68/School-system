import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Dropdown.css';

function Dropdown({ title, links }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="dropbtn">{title}</button>
      {isOpen && (
        <div className="dropdown-content">
          {links.map((link, index) => (
            <Link key={index} to={link.href}>{link.text}</Link>  // Use Link component for navigation
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
