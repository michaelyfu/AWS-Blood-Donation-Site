// import React from "react";
// import ReactDOM from "react-dom";
// import "./styles.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// import Amplify from "aws-amplify";
// import awsmobile from "./aws-exports";
// import config from "./aws-exports";
// import { AmplifyProvider } from "@aws-amplify/ui-react";
// import "@aws-amplify/ui-react/styles.css";
// Amplify.configure(config);


import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);