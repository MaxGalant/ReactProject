import { UserApi } from "../API/API";

const SET_USERS = "Users/SET_USERS";
const SET_CURRENT_PAGE = "Users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "Users/SET_TOTAL_USERS_COUNT";
const SET_PRELOADER = "Users/SET_PRELOADER";

let InitialState = {
  Users: [],
  PageSize: 5,
  TotalUsersCount: 100,
  CurrentPage: 1,
  IsFetching: false,
};

const UserReducer = (State = InitialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return {
        ...State,
        Users: action.users,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...State,
        CurrentPage: action.CurrentPage,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...State,
        TotalUsersCount: action.count,
      };
    }
    case SET_PRELOADER: {
      return {
        ...State,
        IsFetching: action.IsFetching,
      };
    }

    default:
      return State;
  }
};

export let SetUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export let SetCurrentPage = (CurrentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    CurrentPage,
  };
};
export let SetTotalUsersCount = (TotalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: TotalUsersCount,
  };
};
export let SetPreloader = (IsFetching) => {
  return {
    type: SET_PRELOADER,
    IsFetching,
  };
};

export const GetUsers = (Page, PageSize) => {
  return async (dispatch) => {
    dispatch(SetPreloader(true));
    dispatch(SetCurrentPage(Page));
    let data = await UserApi.GetUsers(Page, PageSize);
    dispatch(SetPreloader(false));
    dispatch(SetTotalUsersCount(data.totalCount));
    dispatch(SetUsers(data.items));
  };
};
export const GetPage = (PageNumber) => {
  return async (dispatch) => {
    let data = await UserApi.GetUsers(PageNumber);
    dispatch(SetCurrentPage(data.items));
  };
};
export default UserReducer;
