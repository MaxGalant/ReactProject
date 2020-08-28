import { ProfileApi } from "../API/API";

const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
let InitialState = {
  PostData: [
    { id: 1, like: 0, message: "Hi" },
    { id: 2, like: 1, message: "My posts , better than your" },
    { id: 3, like: 5, message: "My respect , wow" },
    { id: 4, like: 8, message: "Amusing" },
    { id: 5, like: 2, message: "Bruh" },
    { id: 6, like: 3, message: "Haha it is desgation" },
  ],
  Profile: null,
  status: "",
};

const ProfileReducer = (State = InitialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let NewPost = {
        id: 7,
        like: 0,
        message: action.NewPostText,
      };
      return {
        ...State,
        PostData: [...State.PostData, NewPost],
        NewPostText: "",
      };
    }

    case SET_USERS_PROFILE: {
      return { ...State, Profile: action.Profile };
    }

    case SET_STATUS: {
      return { ...State, status: action.status };
    }
    case DELETE_POST: {
      return {
        ...State,
        PostData: State.PostData.filter((p) => p.id != action.postId),
      };
    }
    default:
      return State;
  }
};
export const AddPostActionCreator = (NewPostText) => {
  return {
    type: ADD_POST,
    NewPostText,
  };
};

export let SetUsersProfile = (Profile) => {
  return {
    type: SET_USERS_PROFILE,
    Profile,
  };
};
export let SetStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};
export let DeletePostActionCreator = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
};
export let GetUsersProfile = (userId, UserApi) => async (dispatch) => {
  let Response = await UserApi.GetProfile(userId);
  dispatch(SetUsersProfile(Response.data));
};
export let GetStatus = (userId, ProfileApi) => async (dispatch) => {
  let Response = await ProfileApi.GetStatus(userId);
  dispatch(SetStatus(Response.data));
};
export let UpdateStatus = (status) => async (dispatch) => {
  let Response = await ProfileApi.UpdateStatus(status);
  if (Response.data.resultCode === 0) {
    dispatch(SetStatus(status));
  }
};
export default ProfileReducer;
