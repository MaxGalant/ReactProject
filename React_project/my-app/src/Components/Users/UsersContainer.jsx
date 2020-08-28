import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../Common/Preloader";
import { GetUsers } from "../../Redax/UserReduser";
import { compose } from "redux";
import { WithAuthRedirect } from "../HOC/AuthRedirect";
import {
  GetPageSize,
  GetUser,
  GetTotalUsersCount,
  GetCurrentPage,
  GetIsFetching,
} from "../../Redax/Users-selectors";
class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.GetUsers(this.props.CurrentPage, this.props.PageSize);
  }
  OnPageChanged = (PageNumber) => {
    this.props.GetUsers(PageNumber, this.props.PageSize);
  };
  render() {
    debugger;
    return (
      <>
        {this.props.IsFetching ? <Preloader /> : null}

        <Users
          TotalUsersCount={this.props.TotalUsersCount}
          PageSize={this.props.PageSize}
          CurrentPage={this.props.CurrentPage}
          SelectedPage={this.props.SelectedPage}
          OnPageChanged={this.OnPageChanged}
          Users={this.props.Users}
        />
      </>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    Users: GetUser(state),
    PageSize: GetPageSize(state),
    TotalUsersCount: GetTotalUsersCount(state),
    CurrentPage: GetCurrentPage(state),
    IsFetching: GetIsFetching(state),
  };
};
const UserContainer = connect(mapStateToProps, {
  GetUsers,
})(UsersAPIComponent);
export default compose(
  connect(mapStateToProps, {
    GetUsers,
  }),
  WithAuthRedirect
)(UserContainer);
