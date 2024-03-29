import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const instance = createInstance({
  urlBase: "http://localhost:8080/",
  siteId: 1,
  userId: "Cyri-test", // optional, default value: `undefined`.
  disabled: false, // optional, false by default. Makes all tracking calls no-ops if set to true.
  heartBeat: {
    // optional, enabled by default
    active: true, // optional, default value: true
    seconds: 10, // optional, default value: `15
  },
  linkTracking: true, // optional, default value: true
  configurations: {
    // optional, default value: {}
    // any valid matomo configuration, all below are optional
    disableCookies: true,
    setSecureCookie: true,
    setRequestMethod: "POST",
  },
});

root.render(
  <MatomoProvider value={instance}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MatomoProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
