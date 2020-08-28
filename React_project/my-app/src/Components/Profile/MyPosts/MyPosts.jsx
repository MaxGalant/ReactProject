import React from "react";
import c from "./MyPosts.module.css"; //c its classes object
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  RequireField,
  MaxLengthCreator,
} from "../../Utilse/Validators/Validators";
import { Textarea } from "../../Common/FormControls/FormsControls";
const Max_length10 = MaxLengthCreator(10);

const MyPosts = React.memo((props) => {
  let PostElements = props.PostData.map((p) => (
    <Post message={p.message} like={p.like} />
  ));
  let AddNewPost = (value) => {
    props.AddPostActionCreator(value.NewPostText);
  };

  return (
    <div className={c.MyPosts}>
      <div className={c.PostTitle}>
        <h3>My posts</h3>
      </div>
      <AddPostFormRedux onSubmit={AddNewPost} />

      <div className={c.posts}>{PostElements}</div>
    </div>
  );
});

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name={"NewPostText"}
        placeholder={"Add Post"}
        validate={[RequireField, Max_length10]}
      />
      <div>
        <button className={c.PostButton}>Add post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "ProfileAddPostForm" })(AddPostForm);
export default MyPosts;
