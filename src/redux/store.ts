import { configureStore } from "@reduxjs/toolkit";
// const reduxLogger = require("redux-logger");
import appSettings from "./slices/appSettings";

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    appSettings: appSettings,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;