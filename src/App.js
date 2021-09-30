import React, { useState, useEffect } from "react";
import { fetchRegister, login, tokenLogin } from "./utils";
import "./App.css";

import { Login } from "./components/login";
import { Register } from "./components/register";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [newUser, setNewUser] = useState();
  const [user, setUser] = useState();
  const [post, setPost] = useState();

  useEffect(() => {
    tokenLogin(setUser);
  }, [setUser]);

  const registerHandler = (e) => {
    e.preventDefault();
    fetchRegister(username, email, password, setNewUser);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    login(username, password, setUser);
  };

  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="title">
            <div className="title__main">
              My<span>Notes</span>
            </div>
            <div className="title__sub">Never forget anything again.</div>
          </div>
          <Switch>
            <Route path="/register">
              <Register
                register={registerHandler}
                usernameChange={setUsername}
                emailChange={setEmail}
                passwordChange={setPassword}
              />
            </Route>
            <Route path="/">
              <Login
                login={loginHandler}
                usernameChange={setUsername}
                passwordChange={setPassword}
              />
            </Route>
          </Switch>
        </div>

        {/* <h1>{newUser && newUser.greeting}</h1>
        <h1>{user && user.greeting}</h1> */}
      </div>
    </Router>
  );
};

export default App;
