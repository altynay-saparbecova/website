import React from 'react';
import Topbar from './components/topbar/Topbar.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/registr/Register.jsx';
import Settings from './pages/settings/Settigs.jsx';
import Home from "./pages/home/Home.jsx"
// import Single from './pages/single/Single.jsx';
import Write from './pages/write/Write.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Single from './pages/single/Single.jsx';
const App = () => {
    const currentUser = true;
    return (

        <Router>
            <Topbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/posts">
                    <Home />
                </Route>
                <Route path="/register">
                    {currentUser ? <Home /> : <Register />}
                </Route>
                <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
                <Route path="/post/:id">
                    <Single />
                </Route>
                <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
                <Route path="/settings">
                    {currentUser ? <Settings /> : <Login />}
                </Route>
            </Switch>
        </Router>
    )
};


export default App;