import React from "react";
import c from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader";
import Photo from "../../../img/Dog.jpg";
import ProfileStatusHook from "./ProfileStatusHook";
const ProfileInfo = (props) => {
  if (!props.Profile) {
    return <Preloader />;
  }
  debugger;
  return (
    <div>
      <div className={c.info}>
        <img
          src={
            props.Profile.photos.large != null
              ? props.Profile.photos.large
              : Photo
          }
        />
        <div> {props.Profile.aboutMe}</div>

        <div> {props.Profile.contacts.facebook}</div>
        <ProfileStatusHook
          Status={props.Status}
          UpdateStatus={props.UpdateStatus}
        />
      </div>
    </div>
  );
};
export default ProfileInfo;
