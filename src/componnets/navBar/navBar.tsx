import React, { useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import "./navbar.css"; // Import CSS file for styling
import {
  FaUser,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
  FaRegUserCircle,
  FaTh,
} from "react-icons/fa"; // Import the user icon from Font Awesome
import { appSettings as _interface } from "../../utils/interfaces";
import { Outlet, Link } from "react-router-dom";
import { changeThemeColor, setTheme } from "../../app/appHelper";

const Navbar = () => {
  const appSettings: _interface.appMainSettings = useSelector(
    (state: any) => state.appSettings
  );
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
  useEffect(() => {
    console.log("appSettings?.languages", appSettings?.languages);
  }, [
    appSettings?.fontFamily,
    appSettings?.fontFamilies,
    appSettings?.themeColors,
    appSettings?.themes,
    appSettings?.languages,
    appSettings?.lang,
  ]);

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
            <FaRegUserCircle size={20} />
            {/* <span style={{ marginLeft: 5 }}>Account</span>{" "} */}
            {/* {isDropdownOpen ? (
              <FaChevronUp style={{ marginLeft: 5 }} />
            ) : (
              <FaChevronDown style={{ marginLeft: 5 }} />
            )} */}
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

              <li className="nav-item dropdown">
                <a href="#services">Services</a>
                <ul className="dropdown-menu-left">
                  {appSettings?.themes?.map((item: _interface.colorTypes) => {
                    return (
                      <li
                        onClick={() => {
                          changeThemeColor(item);
                        }}>
                        <a href="#web">{item?.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a
            href="#"
            className={activeLink === "settings" ? "active normal" : "normal"}
            onClick={() => handleClick("settings")}>
            <FaTh style={{ marginLeft: 5 }} />
          </a>

          <ul className="settings-drop">
            {appSettings?.languages?.length !== null &&
              appSettings?.languages?.length !== undefined &&
              appSettings?.languages?.length > 0 &&
              appSettings?.languages?.map((item: _interface.langInterface) => {
                return (
                  <li>
                    <Link
                      className={activeLink === "login" ? "active " : ""}
                      to={`#`}
                      onClick={() => handleClick("login")}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
          </ul>
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
