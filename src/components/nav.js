import React from "react";
import { ReactComponent as Plus } from "../img/plus1.svg";
import { ReactComponent as Cog } from "../img/cog.svg";
import { ReactComponent as Signout } from "../img/switch.svg";

export const Nav = ({logout}) => {
  return (
    <div className="nav">
      <a className="nav__link" href="#">
        <div className="nav__btn">
          <Plus />
        </div>
      </a>
      <a className="nav__link" href="#">
        <div className="nav__btn">
          <Cog />
        </div>
      </a>
      <a className="nav__link" href="/" onClick={logout}>
        <div className="nav__btn">
          <Signout />
        </div>
      </a>
    </div>
  );
};
