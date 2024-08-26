import React, { useState } from "react";
import "./Navbar.css"; // Import CSS file for styling
import { FaUser } from "react-icons/fa"; // Import the user icon from Font Awesome

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = (section: any) => {
    setActiveLink(section);
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleClick = (section: any) => {
    setActiveLink(section);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://images.wayno.ae/insecure/fit/150/92/sm/0/plain/https://runrunuae-assets.s3.me-central-1.amazonaws.com/Clientlogo/65965c448b897.png"
          className="photo"
          width="150"
          height="30"
        ></img>
      </div>

      <ul className={`navbar-links`}>
        <li>
          <a
            href="#home"
            className={activeLink === "home" ? "active" : ""}
            onClick={() => handleClick("home")}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#courier"
            className={activeLink === "courier" ? "active" : ""}
            onClick={() => handleClick("courier")}
          >
            COURIER
          </a>
        </li>
        <li>
          <a
            href="#recoveryPickup"
            className={activeLink === "recoveryPickup" ? "active" : ""}
            onClick={() => handleClick("recoveryPickup")}
          >
            RECOVERY & PICKUP
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeLink === "contact" ? "active" : ""}
            onClick={() => handleClick("contact")}
          >
            Contact
          </a>
        </li>
        <li className="dropdown">
          <a
            href="#user"
            className={activeLink === "user" ? "active " : ""}
            onClick={() => toggleDropdown("user")}
          >
            <FaUser className="user-icon" />
          </a>

          {isDropdownOpen && (
            <div className="dropdown">
              <div className="dropdown-content">
                <a href="#">Login</a>
                <a href="#">Sign up</a>
              </div>
            </div>
          )}
        </li>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
