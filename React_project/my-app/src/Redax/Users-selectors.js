import { createSelector } from "reselect";
const GetUserSelector = (state) => {
  return state.UsersPage.Users;
};

export const GetUser = createSelector(GetUserSelector, (Users) => {
  return Users.filter((u) => true);
});

export const GetPageSize = (state) => {
  return state.UsersPage.PageSize;
};
export const GetTotalUsersCount = (state) => {
  return state.UsersPage.TotalUsersCount;
};
export const GetCurrentPage = (state) => {
  return state.UsersPage.CurrentPage;
};
export const GetIsFetching = (state) => {
  return state.UsersPage.IsFetching;
};
export const GetFollowingProgress = (state) => {
  return state.UsersPage.FollowingProgress;
};
