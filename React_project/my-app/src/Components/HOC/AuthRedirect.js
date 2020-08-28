import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
let mapStateToPropsRedirect = (state) => {
  return { IsAuth: state.Auth.IsAuth };
};
export const WithAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.IsAuth) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(
    RedirectComponent
  );
  return ConnectedAuthRedirectComponent;
};
