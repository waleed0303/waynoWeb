import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import NavBar from "../componnets/navBar/navBar";
import { appSettings as _interface } from "../utils/interfaces";

import { setTheme, setDefaultFonts, handleFontChange } from "./appHelper";

function App() {
  const appSettings: _interface.appMainSettings = useSelector(
    (state: any) => state.appSettings
  );

  useEffect(() => {
    setDefaultFonts();
  }, []);

  useMemo(() => {
    setTheme(appSettings?.fontFamily, appSettings?.themeColors);
  }, [appSettings?.fontFamily, appSettings?.themeColors]);

  return (
    <div className="container-fluid">
      <NavBar />
      <ul id={"select"}>
        {appSettings?.fontFamilies?.map((item: _interface.fontTypes) => {
          return (
            <li key={item?.id} onClick={() => handleFontChange(item)}>
              {item?.regular}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
