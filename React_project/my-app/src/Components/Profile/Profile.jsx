import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        Profile={props.Profile}
        Status={props.Status}
        UpdateStatus={props.UpdateStatus}
      />
      <MyPostsContainer Store={props.Store} />
    </div>
  );
};
export default Profile;
