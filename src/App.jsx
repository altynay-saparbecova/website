import React from "react";
import Topbar from "./components/topbar/Topbar.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/registr/Register.jsx";
import Settings from "./pages/settings/Settings.jsx";
import Home from "./pages/home/Home.jsx";
// import Single from './pages/single/Single.jsx';
import Write from "./pages/write/Write.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Single from "./pages/single/Single.jsx";
import { useSelector } from "react-redux";
import "./styles-less/index.less";

const App = () => {
  const currentUser = useSelector((state) => state.currentUser);
  console.log(currentUser == true);
  //   const currentUser = true;
  return (
    <Router>
      <Topbar />
      {/* <Register /> */}
      <Switch>
        {/* <Login /> */}

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{!currentUser ? <Home /> : <Register />}</Route>
        <Route path="/login">{currentUser ? <Login /> : <Settings />}</Route>
        <Route path="/write">{currentUser ? <Write /> : <Home />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Register />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
