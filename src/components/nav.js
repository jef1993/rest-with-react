import React from "react";
import { ReactComponent as Plus } from "../img/plus1.svg";
import { ReactComponent as Cog } from "../img/cog.svg";
import { ReactComponent as Signout } from "../img/switch.svg";

export const Nav = ({ logout }) => {
  return (
    <div className="nav">
      <button className="nav__btn">
        <Plus />
      </button>
      <a className="nav__btn" href="#">
        <Cog />
      </a>
      <a className="nav__btn" href="/" onClick={logout}>
        <Signout />
      </a>
    </div>
  );
};
