import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

import { appSettings as _interface } from "../utils/interfaces";
import RootNavigator from "../navigator/rootNavigator/rootNavigator";
import { setTheme, setDefaultSettings, handleFontChange } from "./appHelper";

function App(router: any) {
  const appSettings: _interface.appMainSettings = useSelector(
    (state: any) => state.appSettings
  );

  useEffect(() => {
    setDefaultSettings();
  }, []);

  useMemo(() => {
    console.log("appSettings", appSettings);
    setTheme(
      appSettings?.fontFamily,
      appSettings?.themeColors,
      appSettings?.lang
    );
  }, [appSettings?.fontFamily, appSettings?.themeColors, appSettings?.lang]);

  return (
    <div className="">
      <RootNavigator />
    </div>
  );
}

export default App;
