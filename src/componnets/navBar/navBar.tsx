import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setApp } from "../../redux/slices/appSettings";
import { appSettings as app } from "../../utils/interfaces";
import styles from "./styles.module.css";

const NavBar = (props: any) => {
  const _colors: app.colorTypes = useSelector(
    (state: any) => state.appSettings.themeColors
  );
  const _font: app.fontTypes = useSelector(
    (state: any) => state.appSettings.fontFamily
  );

  useEffect(() => {
    document.documentElement.style.setProperty("--dynamic-font", _font.bold);
    document.documentElement.style.setProperty("--app-font-bold", _font.bold);
    document.documentElement.style.setProperty(
      "--app-font-regular",
      _font.regular
    );
    document.documentElement.style.setProperty(
      "--app-font-medium",
      _font.medium
    );

    document.documentElement.style.setProperty(
      "--app-color-primary",
      _colors.primaryColor
    );
    document.documentElement.style.setProperty(
      "--app-color-secondary",
      _colors.secondaryColor
    );
    document.documentElement.style.setProperty(
      "--app-color-tirtary",
      _colors.tirtaryColor
    );
  }, [_font]);

  const handleFontChange = (event: any) => {
    // setApp(setFont(event.target.value));
  };
  return (
    <div style={{}}>
      <p className={styles.bigblue}>This is a sample text with dynamic font.</p>
      <select onChange={handleFontChange}>
        <option value="Arial">Arial</option>
        <option value="Verdana">Verdana</option>
        <option value="Times New Roman">Times New Roman</option>
        {/* Add more font options as needed */}
      </select>
    </div>
  );
};
export default NavBar;
