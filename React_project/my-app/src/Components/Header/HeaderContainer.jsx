import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { LoginOut } from "../../Redax/AuthReduser";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => {
  return { IsAuth: state.Auth.IsAuth, login: state.Auth.login };
};

export default connect(mapStateToProps, { LoginOut })(HeaderContainer);
