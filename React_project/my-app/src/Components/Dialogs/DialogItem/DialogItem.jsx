import React from "react";
import c from "./DialogItem.module.css";

import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={c.dialog}>
      <NavLink to={path}>
        <img src={props.src} alt="" />
        {props.name}
      </NavLink>
    </div>
  );
};
export default DialogItem;
