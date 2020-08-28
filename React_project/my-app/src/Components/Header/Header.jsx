import React from "react";
import c from "./Header.module.css"; //c its classes object
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header className={c.header}>
      <div>
        <img src="https://i.pinimg.com/736x/17/ba/bb/17babb4a542a019e17174c32166c4aab.jpg"></img>
        <div className={c.LoginBlock}>
          {props.IsAuth ? (
            <div>
              {props.login}-{" "}
              <button className={c.LoginBut} onClick={props.LoginOut}>
                Log out
              </button>
            </div>
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
