import { createSlice } from "@reduxjs/toolkit";
import { colors, fonts } from "../../utils/staticText";
import {appSettings as app} from "../../utils/interfaces";
import {urls} from "../../config";

const initialState=<app.appMainSettings> {
  fontFamily: fonts?.primaryFont, //selected font 
  fontFamilies:[fonts?.primaryFont], //list of fonts 


  
  themes:[colors?.primaryTheme],  //list of color themes objects 
  themeColors:colors?.primaryTheme //selected color object 
};

const appSettings = createSlice({
  name: "appSettings",
  initialState,
  reducers: {
    setApp: (state:app.appMainSettings, action) => {
      state.fontFamilies=action?.payload?.fontFamilies?action?.payload?.fontFamilies:[fonts?.primaryFont];
      state.fontFamily=action?.payload?.fontFamily?action?.payload?.fontFamily:fonts?.primaryFont;
      state.themes=action?.payload?.themes?action?.payload?.themes:[colors];
      state.themeColors=(action?.payload?.themes?.length>0)?action?.payload?.themes[0]:colors;
    },
    updateFont: (state:app.appMainSettings, action) => {
      state.fontFamily=action?.payload?.fontFamily?action?.payload?.fontFamily:colors?.primaryTheme;
    },
    updateColor: (state:app.appMainSettings, action) => {
      state.themeColors=action?.payload?.themeColors?action?.payload?.themeColors:colors;
    },
  },  
});

export default appSettings.reducer;
export const {setApp, updateFont, updateColor} = appSettings.actions;