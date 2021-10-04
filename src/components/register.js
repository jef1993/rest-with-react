import React from "react";
export const Register = ({
  register,
  usernameChange,
  emailChange,
  passwordChange,
  message,
}) => {
  return (
    <div className="container__content register">
      <form className="form form__register" onSubmit={register}>
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
            placeholder="email"
            type="email"
            onChange={(e) => {
              emailChange(e.target.value);
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
          <div className="form__message">{message}</div>
        </div>

        <button className="form__btn" type="submit">
          Register
        </button>
      </form>
      <div className="alt">
        have a account?{" "}
        <span>
          <a className="alt__link" href="/">
            Sign In
          </a>
        </span>
      </div>
    </div>
  );
};
