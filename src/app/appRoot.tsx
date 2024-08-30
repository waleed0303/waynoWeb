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
    setTheme(appSettings?.fontFamily, appSettings?.themeColors);
  }, [appSettings?.fontFamily, appSettings?.themeColors]);

  return (
    <div className="">
      <RootNavigator />
    </div>
  );
}

export default App;
