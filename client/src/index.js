import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { StoreProvider } from "../src/utils/GlobalState";
import "./styles/tailwind.css";
import App from "./App";

import registerServiceWorker from "./registerServiceWorker";

// Here is if we have an id_token in localStorage
if (localStorage.getItem("id_token")) {
  // then we will attach it to the headers of each request from react
  // application via axios
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("id_token")}`;
}

ReactDOM.render(
  <React.StrictMode>
  <StoreProvider>
    <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

registerServiceWorker();
