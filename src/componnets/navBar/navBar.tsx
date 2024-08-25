import React, { useState } from "react";
import "./Navbar.css"; // Import CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="subNavDivFirst">
        <div className="navbar-logo">
          <h2>MyLogo</h2>
        </div>
      </div>
      <div className="subNavDivSecond">
        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li className="dropdown">
            <a href="#services" onClick={toggleDropdown}>
              Services
            </a>
            <span className="arrow-down"></span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#web-design">Web Design</a>
                </li>
                <li>
                  <a href="#seo">SEO</a>
                </li>
                <li>
                  <a href="#marketing">Marketing</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
