import { configureStore } from "@reduxjs/toolkit";
// const reduxLogger = require("redux-logger");
import appSettings from "./slices/appSettings";
import { appSettings as app } from "../utils/interfaces";
// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    appSettings: appSettings,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;