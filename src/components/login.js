import React from "react";

export const Login = ({
  login,
  usernameChange,
  passwordChange,
  errorMessage,
}) => {
  const myPosts = () => {
    console.log("this is my posts");
  };

  return (
    <div className="container__content login">
      <form className="form form__login" onSubmit={login}>
        <div className="form__box">
          <input
            className="form__input"
            placeholder="username"
            type="text"
            onChange={(e) => {
              usernameChange(e.target.value);
            }}
          ></input>
          <input
            id="password"
            className="form__input"
            placeholder="password"
            type="password"
            onChange={(e) => {
              passwordChange(e.target.value);
            }}
          ></input>
          {/* <label for="password">{errorMessage}</label> */}
        </div>

        <button className="form__btn" type="submit" onClick={myPosts}>
          Sign In
        </button>
      </form>
      <div className="alt">
        or{" "}
        <span>
          <a className="alt__link" href="/register">
            Create Account
          </a>
        </span>
      </div>
    </div>
  );
};
