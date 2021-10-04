import React, { useState, useEffect } from "react";
import {
  register,
  login,
  logout,
  tokenLogin,
  showPosts,
  searchPost,
  deletePost,
} from "./utils";
import "./App.css";

import { Login } from "./components/login";
import { Register } from "./components/register";
import { Nav } from "./components/nav";
import { Posts } from "./components/posts";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [newUser, setNewUser] = useState("");
  const [user, setUser] = useState("");
  const [post, setPost] = useState("");

  useEffect(() => {
    tokenLogin(setUser, showPosts, setUsername, setPost);
  }, [setUser]);

  const registerHandler = async (e) => {
    e.preventDefault();
    await register(username, email, password, setNewUser);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    await login(username, password, setUser);
    await showPosts(username, setPost);
  };

  const searchHandler = (str) => {
    if (str !== "") {
      searchPost(username, str, setPost);
    } else {
      showPosts(username, setPost);
    }
  };

  const deleteHandler = async (id) => {
    await deletePost(id);
    await showPosts(user.user.username, setPost);
  };

  return (
    <Router>
      <div className="App">
        {/* <Switch>
          <Route path="/user">
            {user === "" ? (
              <Redirect to="/" />
            ) : (
              <div className="user">
                <Nav logout={logout} />
                <Posts
                  posts={post}
                  username={user.user.username}
                  searchChange={setPost}
                />
              </div>
            )}
          </Route>
        </Switch> */}

        {user !== "" ? (
          <div className="user">
            <Nav logout={logout} />
            <Posts
              posts={post}
              username={user.user.username}
              searchChange={searchHandler}
              deleteTarget={deleteHandler}
            />
          </div>
        ) : (
          ""
        )}

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
                message={newUser !== "" ? newUser.message : ""}
              />
            </Route>
            <Route path="/">
              <Login
                login={loginHandler}
                usernameChange={setUsername}
                passwordChange={setPassword}
              />
            </Route>
            <Route path="/user"></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
