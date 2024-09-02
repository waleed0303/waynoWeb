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
import { settingsUl, languageUl } from "./navBarHelper";

const Navbar = () => {
  const appSettings: _interface.appMainSettings = useSelector(
    (state: any) => state.appSettings
  );
  const [isOpen, setIsOpen] = useState(false);
  const [authDrop, setAuthDrop] = useState(false);
  const [settingsDrop, setSettingsDrop] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const authToggle = (section: any) => {
    setActiveLink(section);
    setAuthDrop(!authDrop);
    setSettingsDrop(false);
  };
  const toggleSettings = (section: any) => {
    setActiveLink(section);
    setSettingsDrop(!settingsDrop);
    setAuthDrop(false);
  };
  const handleClick = (section: any) => {
    setActiveLink(section);
    setAuthDrop(false);
    setSettingsDrop(false);
    setIsOpen(!isOpen);
  };
  // useEffect(() => {
  //   console.log("appSettings?.languages", appSettings?.languages);
  // }, [
  //   appSettings?.fontFamily,
  //   appSettings?.fontFamilies,
  //   appSettings?.themeColors,
  //   appSettings?.themes,
  //   appSettings?.languages,
  //   appSettings?.lang,
  // ]);

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
          <Link
            to={`/`}
            className={activeLink === "home" ? "active normal" : "normal"}
            onClick={() => handleClick("home")}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to={`courier`}
            className={activeLink === "courier" ? "active normal" : "normal"}
            onClick={() => handleClick("courier")}
          >
            COURIER
          </Link>
        </li>
        <li>
          <Link
            to={`recoverpickup`}
            className={
              activeLink === "recoveryPickup" ? "active normal" : "normal"
            }
            onClick={() => handleClick("recoveryPickup")}
          >
            RECOVERY & PICKUP
          </Link>
        </li>
        <li>
          <Link
            to={`contact`}
            className={activeLink === "contact" ? "active normal" : "normal"}
            onClick={() => handleClick("contact")}
          >
            Contact
          </Link>
        </li>
        <li>
          <a
            href="#auth"
            className={activeLink === "auth" ? "active " : ""}
            onClick={() => authToggle("auth")}
          >
            <FaRegUserCircle size={20} />
          </a>

          {authDrop && (
            <ul className="authul">
              <li>
                <Link
                  className={activeLink === "login" ? "active " : ""}
                  to={`signin`}
                  onClick={() => handleClick("login")}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className={activeLink === "signup" ? "active " : ""}
                  to={`signup`}
                  onClick={() => handleClick("signup")}
                >
                  Signup
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a
            href="#"
            className={activeLink === "settings" ? "active" : ""}
            onClick={() => toggleSettings("settings")}
          >
            <FaTh style={{ marginLeft: 5 }} />
          </a>
          {settingsDrop && (
            <ul className="settingsul">
              <li>
                <Link className={"theme header"} to={`#`}>
                  Theme
                  {settingsUl(appSettings?.themes, activeLink, handleClick)}
                </Link>
                <li>
                  <Link className={"lang header"} to={`#`}>
                    Language
                    {languageUl(appSettings?.languages, handleClick)}
                  </Link>
                </li>
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
