import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ExpenseTrackerContextProvider } from "./context/context";

ReactDOM.render(
  <ExpenseTrackerContextProvider>
    <App />
  </ExpenseTrackerContextProvider>,
  document.getElementById("root")
);
