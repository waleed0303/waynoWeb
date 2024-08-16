import { createSlice } from "@reduxjs/toolkit";
import colors from "../../appStyles/colors";
import fontFamily from "../../appStyles/fontFamily";
import {appSettings as app} from "../../utils/interfaces";

const initialState=<app.appMainSettings> {
  fontFamily: fontFamily, //selected font 
  fontFamilies:[fontFamily], //list of fonts 


  
  themes:[colors],  //list of color themes objects 
  themeColors:colors //selected color object 
};

const appSettings = createSlice({
  name: "appSettings",
  initialState,
  reducers: {
    setApp: (state:app.appMainSettings, action) => {
      state.fontFamilies=action?.payload?.fontFamilies?action?.payload?.fontFamilies:[fontFamily];
      state.fontFamily=action?.payload?.fontFamily?action?.payload?.fontFamily:fontFamily;
      state.themes=action?.payload?.themes?action?.payload?.themes:[colors];
      state.themeColors=(action?.payload?.themes?.length>0)?action?.payload?.themes[0]:colors;
    },
  },  
});

export default appSettings.reducer;
export const {setApp} = appSettings.actions;