import { Outlet, Link } from "react-router-dom";
import { appSettings as _interface } from "../../utils/interfaces";
import {
  changeThemeColor,
  setTheme,
  changeLangAndFont,
} from "../../app/appHelper";

export const settingsUl = (
  themes?: _interface.colorTypes[],
  activeLink?: string,
  handleClick?: any
) => {
  return (
    <ul className="theme-drop-down">
      {themes?.map((item: _interface.colorTypes) => {
        return (
          <li
            onClick={() => {
              changeThemeColor(item);
            }}
          >
            <a href="#web">
              {item?.name}{" "}
              <p
                style={{
                  color: item?.primaryColor,
                  display: "inline-block",
                }}
              >
                {item?.primaryColor}
              </p>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export const languageUl = (
  languages?: _interface.langInterface[],

  handleClick?: any
) => {
  return (
    <ul className="lang-drop-down">
      {languages?.map((item: _interface.langInterface) => {
        return (
          <li
            onClick={() => {
              changeLangAndFont(item);
            }}
          >
            <a href="#web">{item?.name}</a>
          </li>
        );
      })}
    </ul>
  );
};
