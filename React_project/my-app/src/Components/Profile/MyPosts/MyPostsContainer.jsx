import { AddPostActionCreator } from "../../../Redax/ProfileReduce";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    PostData: state.ProfilePage.PostData,
    NewPostText: state.ProfilePage.NewPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    AddPostActionCreator: (NewPostText) => {
      dispatch(AddPostActionCreator(NewPostText));
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
