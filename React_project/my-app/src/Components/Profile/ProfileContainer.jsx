import React from "react";
import { connect } from "react-redux";
import {
  GetUsersProfile,
  GetStatus,
  UpdateStatus,
} from "../../Redax/ProfileReduce";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { UserApi, ProfileApi } from "../../API/API";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.LognedId;
    }
    if (!userId) {
      this.props.history.push("/login");
    }
    this.props.GetUsersProfile(userId, UserApi);
    this.props.GetStatus(userId, ProfileApi);
  }
  render() {
    return (
      <div>
        <Profile
          {...this.props}
          Profile={this.props.Profile}
          Status={this.props.Status}
          UpdateStatus={this.props.UpdateStatus}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    Profile: state.ProfilePage.Profile,
    Status: state.ProfilePage.status,
    LognedId: state.Auth.id,
    IsAuth: state.Auth.IsAuth,
  };
};
export default compose(
  connect(mapStateToProps, { GetUsersProfile, GetStatus, UpdateStatus }),
  withRouter
  // WithAuthRedirect
)(ProfileContainer);
