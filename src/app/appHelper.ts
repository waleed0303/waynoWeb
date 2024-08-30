import { appSettings as _interface } from "../utils/interfaces";
import { colors, fonts, lang } from "../utils/staticText";
import { updateFont, setApp, updateColor } from "../redux/slices/appSettings";
// import {en} from "../assets/lang/eng";
// import {ar} from "../assets/lang/ar";
import * as en from "../assets/lang/eng";
import * as ar from "../assets/lang/ar";
import store from "../redux/store";
const { dispatch } = store;

export const setTheme = (_font: any, _color: any) => {
  document.documentElement.style.setProperty("--app-font-bold", _font?.bold);
  document.documentElement.style.setProperty(
    "--app-font-semiBold",
    _font?.semiBold
  );
  document.documentElement.style.setProperty(
    "--app-font-medium",
    _font?.medium
  );
  document.documentElement.style.setProperty(
    "--app-font-regular",
    _font?.regular
  );
  document.documentElement.style.setProperty(
    "--app-font-bold-weight",
    _font?.weight?.bold
  );
  document.documentElement.style.setProperty(
    "--app-font-semiBold-weight",
    _font?.weight?.semiBold
  );
  document.documentElement.style.setProperty(
    "--app-font-medium-weight",
    _font?.weight?.medium
  );
  document.documentElement.style.setProperty(
    "--app-font-regular-weight",
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

  document.documentElement.style.setProperty(
    "--app-color-white",
    _color.whiteColor
  );
  document.documentElement.style.setProperty(
    "--app-color-black",
    _color.blackColor
  );
  document.documentElement.style.setProperty(
    "--app-color-offWhite",
    _color.offWhite
  );
  document.documentElement.style.setProperty(
    "--app-color-greyShade",
    _color.greyShade
  );
};
export const setDefaultSettings = () => {
  let fontFamilies: _interface.fontTypes[] = [
    fonts?.primaryFont,
    fonts?.secondaryFont,
  ];
  let themesAll: _interface.colorTypes[] = [
    colors?.primaryTheme,
    colors?.secondaryTheme,
  ];

  let langAll: _interface.langInterface[] = [
    en?.en,
    ar?.ar,
  ];
  let appStyle: _interface.appMainSettings = {
    fontFamilies: fontFamilies,
    themes: themesAll,
    languages:langAll
  };
  dispatch(setApp(appStyle));
};
export const changeThemeColor = (selColor:_interface.colorTypes) => {
  dispatch(updateColor(selColor));
};

export const handleFontChange = (item: _interface.fontTypes) => {
  dispatch(
    updateFont({
      fontFamily: item,
    })
  );
};
