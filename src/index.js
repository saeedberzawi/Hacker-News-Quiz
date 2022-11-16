import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// => Context
import { AppProvider } from "./context/context";
// => Redux
import { store } from "./storeRedux";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
  </React.StrictMode>
);
