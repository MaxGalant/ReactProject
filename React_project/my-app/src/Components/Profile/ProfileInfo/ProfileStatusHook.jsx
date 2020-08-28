import c from "./ProfileInfo.module.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const ProfileStatusHook = (props) => {
  let [EditMode, SetEditMode] = useState(false);
  let [Status, SetStatus] = useState(props.Status);
  useEffect(() => {
    SetStatus(props.Status);
  }, [props.Status]);

  const ActivateEditMode = () => {
    SetEditMode(true);
  };
  const DeactivateEditMode = () => {
    props.UpdateStatus(Status);
    SetEditMode(false);
  };
  const OnStatusChanged = (e) => {
    SetStatus(e.currentTarget.value);
  };
  return (
    <div className={c.Status}>
      {!EditMode && (
        <div>
          <span onDoubleClick={ActivateEditMode}>
            {props.Status || "Hello I am Maks"}
          </span>
        </div>
      )}
      {EditMode && (
        <div>
          <input
            onChange={OnStatusChanged}
            autoFocus={true}
            value={Status}
            onBlur={DeactivateEditMode}
          ></input>
        </div>
      )}
    </div>
  );
};
export default ProfileStatusHook;
