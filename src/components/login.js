import React from "react";

export const Login = ({ login, usernameChange, passwordChange }) => {
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
            className="form__input"
            placeholder="password"
            type="password"
            onChange={(e) => {
              passwordChange(e.target.value);
            }}
          ></input>
        </div>

        <button className="form__btn" type="submit">
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
