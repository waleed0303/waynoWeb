import React, { useState } from "react";
import "./Navbar.css"; // Import CSS file for styling
import { FaUser, FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa"; // Import the user icon from Font Awesome

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = (section: any) => {
    setActiveLink(section);
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleClick = (section: any) => {
    setActiveLink(section);
    setIsDropdownOpen(false);
  };

  return (
    <nav className={`${isOpen ? "navbar" : "navbar"}`}>
      <div className="navbar-logo">
        <img
          src="https://images.wayno.ae/insecure/fit/150/92/sm/0/plain/https://runrunuae-assets.s3.me-central-1.amazonaws.com/Clientlogo/66cd80617f1c6.png"
          className="photo"
          width="150"
          height="30"
        ></img>
      </div>

      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <a
            href="#home"
            className={activeLink === "home" ? "active normal" : "normal"}
            onClick={() => handleClick("home")}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#courier"
            className={activeLink === "courier" ? "active normal" : "normal"}
            onClick={() => handleClick("courier")}
          >
            COURIER
          </a>
        </li>
        <li>
          <a
            href="#recoveryPickup"
            className={
              activeLink === "recoveryPickup" ? "active normal" : "normal"
            }
            onClick={() => handleClick("recoveryPickup")}
          >
            RECOVERY & PICKUP
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeLink === "contact" ? "active normal" : "normal"}
            onClick={() => handleClick("contact")}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#user"
            className={activeLink === "user" ? "active " : ""}
            onClick={() => toggleDropdown("user")}
          >
            <FaUser /> <span style={{ marginLeft: 5 }}>Account</span>{" "}
            {isDropdownOpen ? (
              <FaChevronUp style={{ marginLeft: 5 }} />
            ) : (
              <FaChevronDown style={{ marginLeft: 5 }} />
            )}
          </a>

          {isDropdownOpen && (
            <ul className="dropdown-content">
              <li>
                <a
                  className={activeLink === "login" ? "active " : ""}
                  href="#web-design"
                  onClick={() => handleClick("login")}
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  className={activeLink === "signup" ? "active " : ""}
                  href="#web-design"
                  onClick={() => handleClick("signup")}
                >
                  Signup
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
      {!isOpen ? (
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      ) : (
        <div className="navbar-toggle" onClick={toggleMenu}>
          <FaTimes size={20} className="crossIcon" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
