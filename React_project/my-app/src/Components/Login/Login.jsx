import React from "react";
import LoginReduxForm from "./Login_Form";
import { connect } from "react-redux";
import { login } from "../../Redax/AuthReduser";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.IsAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    IsAuth: state.Auth.IsAuth,
  };
};
export default connect(mapStateToProps, { login })(Login);
