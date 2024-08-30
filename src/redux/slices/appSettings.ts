import { createSlice } from "@reduxjs/toolkit";
import { colors, fonts, lang } from "../../utils/staticText";
import {appSettings as app} from "../../utils/interfaces";
import {urls} from "../../config";

const initialState=<app.appMainSettings> {
  fontFamily: fonts?.primaryFont, //selected font 
  fontFamilies:[fonts?.primaryFont], //list of fonts 


  
  themes:[colors?.primaryTheme],  //list of color themes objects 
  themeColors:colors?.primaryTheme, //selected color object 

  languages:[lang?.en?.en],
  lang:lang?.en?.en
};

const appSettings = createSlice({
  name: "appSettings",
  initialState,
  reducers: {
    setApp: (state:app.appMainSettings, action) => {
      state.fontFamilies=action?.payload?.fontFamilies?action?.payload?.fontFamilies:[fonts?.primaryFont];
      state.fontFamily=action?.payload?.fontFamily?action?.payload?.fontFamily:fonts?.primaryFont;
      state.themes=action?.payload?.themes?action?.payload?.themes:[colors?.primaryTheme];
      state.themeColors=action?.payload?.themes.length>0?action?.payload?.themes[0]:colors;
      state.lang=action?.payload?action?.payload:lang?.en?.en;
      state.languages=(action?.payload?.languages!==null&&action?.payload?.languages!==undefined)?action?.payload?.languages:[lang?.en];
    },
    updateFont: (state:app.appMainSettings, action) => {
      state.fontFamily=action?.payload?.fontFamily?action?.payload?.fontFamily:colors?.primaryTheme;
    },
    updateColor: (state:app.appMainSettings, action:{type:any, payload:app.colorTypes}) => {
      let payload:app.colorTypes = action?.payload;
      state.themeColors=payload?payload:colors?.primaryTheme;
    },
    updateLanguage: (state:app.appMainSettings, action:{type:any, payload:app.langInterface}) => {
      state.lang=action?.payload?action?.payload:lang?.en?.en;
    },
  },  
});

export default appSettings.reducer;
export const {setApp, updateFont, updateColor, updateLanguage} = appSettings.actions;