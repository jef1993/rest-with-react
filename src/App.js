import React, { useState } from "react";
import { fetchRegister } from "./utils";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    fetchRegister(username, email, password);
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          placeholder="username"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        ></input>
        <input
          placeholder="email"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        ></input>
        <input
          placeholder="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        ></input>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default App;
