import React from "react";
import c from "./Users.module.css";
import Photo from "../../img/Makam.jpg";
import { NavLink } from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";
let Users = (props) => {
  return (
    <div>
      <div className={c.users}>
        {props.Users.map((u) => (
          <div key={u.id}>
            <span>
              <div className={c.user_img}>
                <NavLink to={"/profile/" + u.id}>
                  <img src={u.photos.small != null ? u.photos.small : Photo} />
                </NavLink>
              </div>{" "}
              <span>
                <div> {u.name} </div> <div> {u.status} </div>
              </span>
            </span>
          </div>
        ))}
      </div>
      <div>
        <Paginator
          CurrentPage={props.CurrentPage}
          OnPageChanged={props.OnPageChanged}
          TotalItemsCount={props.TotalUsersCount}
          PageSize={props.PageSize}
        />
      </div>
    </div>
  );
};

export default Users;
