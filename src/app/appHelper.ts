import { appSettings as _interface } from "../utils/interfaces";
import { colors, fonts } from "../utils/staticText";
import { updateFont, setApp } from "../redux/slices/appSettings";
import store from "../redux/store";
const { dispatch } = store;


export const setTheme = (_font:any, _color:any)=>{
    document.documentElement.style.setProperty("--app-font-bold", _font?.bold);
    document.documentElement.style.setProperty(
      "--app-font-regular",
      _font?.semiBold
    );
    document.documentElement.style.setProperty(
      "--app-font-regular",
      _font?.medium
    );
    document.documentElement.style.setProperty(
      "--app-font-medium",
      _font?.regular
    );
    document.documentElement.style.setProperty(
      "--app-font-bold-weight",
      _font?.weight?.bold
    );
    document.documentElement.style.setProperty(
      "--app-font-regular-weight",
      _font?.weight?.semiBold
    );
    document.documentElement.style.setProperty(
      "--app-font-regular-weight",
      _font?.weight?.medium
    );
    document.documentElement.style.setProperty(
      "--app-font-medium-weight",
      _font?.weight?.regular
    );

    document.documentElement.style.setProperty(
      "--app-color-primary",
      _color.primaryColor
    );
    document.documentElement.style.setProperty(
      "--app-color-secondary",
      _color.secondaryColor
    );
    document.documentElement.style.setProperty(
      "--app-color-tirtary",
      _color.tirtaryColor
    );
}
export const setDefaultFonts = () => {
  let fontFamilies: _interface.fontTypes[] = [
    fonts?.primaryFont,
    fonts?.secondaryFont,
  ];
  let themesAll: _interface.colorTypes[] = [
    colors?.primaryTheme,
    colors?.secondaryTheme,
  ];
  let appStyle: _interface.appMainSettings = {
    fontFamilies: fontFamilies,
    themes: themesAll,
  };
  dispatch(setApp(appStyle));
};
export const handleFontChange = (item: _interface.fontTypes) => {
  dispatch(
    updateFont({
      fontFamily: item,
    })
  );
};
