import "./App.css";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Home, Page2, Page3, Flow } from "./Pages/index";

function App() {
  return (
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
  );
}
export default App;
