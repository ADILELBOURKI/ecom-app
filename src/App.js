import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/Homepage";

const HatsPage = () => {
  return (
    <div>
      <h1>HTS PAGE</h1>
    </div>
  );
};
function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
