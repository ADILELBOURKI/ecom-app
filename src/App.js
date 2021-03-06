import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/sign-in-sign-up-page/SignInSignSignUp";

// const HatsPage = () => {
//   return (
//     <div>
//       <h1>HTS PAGE</h1>
//     </div>
//   );
// };
function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
