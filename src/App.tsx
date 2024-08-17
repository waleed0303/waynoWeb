import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import NavBar from "./componnets/navBar/navBar";

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <NavBar />
      </div>
    </Provider>
  );
}

export default App;
