import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setApp } from "../../redux/slices/appSettings";
import { appSettings as app } from "../../utils/interfaces";
import fonts from "../../assets/fonts";
import styles from "./styles.module.css";

const NavBar = (props: any) => {
  const _colors: app.colorTypes = useSelector(
    (state: any) => state.appSettings.themeColors
  );
  const _font: app.fontTypes = useSelector(
    (state: any) => state.appSettings.fontFamily
  );

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--app-font-bold",
      fonts?.family?.bold
    );
    document.documentElement.style.setProperty(
      "--app-font-regular",
      fonts?.family?.semiBold
    );
    document.documentElement.style.setProperty(
      "--app-font-regular",
      fonts?.family?.medium
    );
    document.documentElement.style.setProperty(
      "--app-font-medium",
      fonts?.family?.regular
    );
    document.documentElement.style.setProperty(
      "--app-font-bold-weight",
      fonts?.weights?.bold
    );
    document.documentElement.style.setProperty(
      "--app-font-regular-weight",
      fonts?.weights?.semiBold
    );
    document.documentElement.style.setProperty(
      "--app-font-regular-weight",
      fonts?.weights?.medium
    );
    document.documentElement.style.setProperty(
      "--app-font-medium-weight",
      fonts?.weights?.regular
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
  });

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
