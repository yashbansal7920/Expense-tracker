import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ExpenseTrackerContextProvider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";

ReactDOM.render(
  <SpeechProvider appId="8c95c04b-d072-4259-b674-878911faa7ee" language="en-US">
    <ExpenseTrackerContextProvider>
      <App />
    </ExpenseTrackerContextProvider>
  </SpeechProvider>,
  document.getElementById("root")
);
