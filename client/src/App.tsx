import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/Store";

import "./styles/global.css";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
