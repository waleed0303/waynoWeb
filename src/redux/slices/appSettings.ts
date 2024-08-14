import { createSlice } from "@reduxjs/toolkit";
import colors from "../../appStyles/colors";
import fontFamily from "../../appStyles/fontFamily";
import {appSettings as app} from "../../utils/interfaces";

const initialState=<app.appMainSettings> {
  fontFamily: fontFamily,
  themes:[colors],
  appTheme:colors
};

const appSettings = createSlice({
  name: "appSettings",
  initialState,
  reducers: {
    setApp: (state:app.appMainSettings) => {
      state.fontFamily=state?.fontFamily;
      state.themes=state?.themes;
      (state?.themes?.length>0)&&(state.appTheme=state?.themes[0]);
    },
  },
});

export default appSettings.reducer;
export const {setApp} = appSettings.actions;