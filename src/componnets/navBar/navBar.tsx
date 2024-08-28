import React, { useState } from "react";
import "./navbar.css"; // Import CSS file for styling
import { FaUser, FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa"; // Import the user icon from Font Awesome
import { Outlet, Link } from "react-router-dom";

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
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${isOpen ? "navbar" : "navbar"}`}>
      <div className="navbar-logo">
        <img
          src="https://images.wayno.ae/insecure/fit/150/92/sm/0/plain/https://runrunuae-assets.s3.me-central-1.amazonaws.com/Clientlogo/66cd80617f1c6.png"
          className="photo"
          width="150"
          height="30"></img>
      </div>

      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link
            to={`/`}
            className={activeLink === "home" ? "active normal" : "normal"}
            onClick={() => handleClick("home")}>
            HOME
          </Link>
        </li>
        <li>
          <Link
            to={`courier`}
            className={activeLink === "courier" ? "active normal" : "normal"}
            onClick={() => handleClick("courier")}>
            COURIER
          </Link>
        </li>
        <li>
          <Link
            to={`recoverpickup`}
            className={
              activeLink === "recoveryPickup" ? "active normal" : "normal"
            }
            onClick={() => handleClick("recoveryPickup")}>
            RECOVERY & PICKUP
          </Link>
        </li>
        <li>
          <Link
            to={`contact`}
            className={activeLink === "contact" ? "active normal" : "normal"}
            onClick={() => handleClick("contact")}>
            Contact
          </Link>
        </li>
        <li>
          <a
            href="#user"
            className={activeLink === "user" ? "active " : ""}
            onClick={() => toggleDropdown("user")}>
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
                <Link
                  className={activeLink === "login" ? "active " : ""}
                  to={`signin`}
                  onClick={() => handleClick("login")}>
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className={activeLink === "signup" ? "active " : ""}
                  to={`signup`}
                  onClick={() => handleClick("signup")}>
                  Signup
                </Link>
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
