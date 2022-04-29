import "./App.css";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Home, Page2, Page3, Flow } from "./Pages/index";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";

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
function App() {
  return (
    <MatomoProvider value={instance}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" element={<Home />} exact />
            <Route path="/Page2" element={<Page2 />} />
            <Route path="/Page3" element={<Page3 />} />
            <Route path="/Flow" element={<Flow />} />
          </Switch>
        </div>
      </BrowserRouter>
    </MatomoProvider>
  );
}
export default App;
