import { AuthApi } from "../API/API";
import { stopSubmit } from "redux-form";

const SET_USERS_DATA = "Auth/SET_USERS_DATA";

let InitialState = {
  id: null,
  email: null,
  login: null,
  IsAuth: false,
};

const AuthReduser = (State = InitialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA: {
      return {
        ...State,
        ...action.data,
      };
    }

    default:
      return State;
  }
};
export const SetUsersData = (id, email, login, IsAuth) => {
  return {
    type: SET_USERS_DATA,
    data: { id, email, login, IsAuth },
  };
};
export let GetAuthUserData = () => async (dispatch) => {
  let Response = await AuthApi.Me();
  if (Response.data.resultCode === 0) {
    let { email, id, login } = Response.data.data;
    dispatch(SetUsersData(email, id, login, true));
  }
};
export let login = (email, password, rememberMe) => async (dispatch) => {
  let Response = await AuthApi.Login(email, password, rememberMe);
  if (Response.data.resultCode === 0) {
    dispatch(GetAuthUserData());
  } else {
    let message =
      Response.data.messages.length > 0
        ? Response.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export let LoginOut = () => async (dispatch) => {
  let Response = await AuthApi.LoginOut();
  if (Response.data.resultCode === 0) {
    dispatch(SetUsersData(null, null, null, false));
  }
};

export default AuthReduser;
