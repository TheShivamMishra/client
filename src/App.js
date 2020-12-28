import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/utils/Login"
import SignUp from "./components/utils/SignUp";
import Main from "./components/Main";
import DonateBlood from "./components/BloodDonation";
import ReceiveBlood from "./components/BloodFetch";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/main" exact component={Main}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/blood/fetch" exact component={ReceiveBlood}></Route>
          <Route path="/blood/donate" exact component={DonateBlood}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
