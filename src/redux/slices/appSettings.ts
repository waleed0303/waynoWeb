import { createSlice } from "@reduxjs/toolkit";
import colors from "../../appStyles/colors";
import fontFamily from "../../appStyles/fontFamily";
// import {fontTypes} from "../../utils/interfaces";

const initialState=<fontTypes> {
  fontFamily: fontFamily,
  themes:[colors],
  appTheme:colors
};

const appSettings = createSlice({
  name: "appSettings",
  initialState,
  reducers: {
    setApp: (state) => {
      state.fontFamily=state?.fontFamily;
      state.themes=state?.themes;
      (state?.themes?.length>0)&&(state.appTheme=state?.themes[0]);
    },
  },
});

export default appSettings.reducer;
export const {setApp} = appSettings.actions;