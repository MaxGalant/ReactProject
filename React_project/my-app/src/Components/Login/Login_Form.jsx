import React from "react";
import { reduxForm, Field } from "redux-form";
import c from "../Common/FormControls/FormControls.module.css";
import { Input, CreateField } from "../Common/FormControls/FormsControls";
import {
  RequireField,
  MaxLengthCreator,
} from "../Utilse/Validators/Validators";
const Max_length20 = MaxLengthCreator(20);
const Login_Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={c.LogForm}>
      <h1 className={c.LoginTittle}>Login</h1>
      {CreateField("Email", "email", Input, [RequireField, Max_length20])}
      {CreateField(
        "Password",
        "password",
        Input,
        [RequireField, Max_length20],
        { type: "password" }
      )}
      {CreateField(
        null,
        "checkbox",
        Input,
        [],
        { type: "checkbox" },
        "Remember me"
      )}
      {props.error && <div className={c.formErrorSummary}> {props.error}</div>}
      <div>
        <button className={c.LogFormBut}>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({
  form: "login",
})(Login_Form);

export default LoginReduxForm;
