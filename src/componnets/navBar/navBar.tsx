import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setApp } from "../../redux/slices/appSettings";
import { appSettings as app } from "../../utils/interfaces";
import styles from "./styles.module.css";

const NavBar = (props: any) => {
  return (
    <div style={{}}>
      <p className={styles.bigblue}>This is a sample text with dynamic font.</p>
      <p className={styles.bigblue1}>
        This is a sample text with dynamic font.
      </p>
      <p className={styles.bigblue2}>
        This is a sample text with dynamic font.
      </p>
      <p className={styles.bigblue3}>
        This is a sample text with dynamic font.
      </p>
    </div>
  );
};
export default NavBar;
