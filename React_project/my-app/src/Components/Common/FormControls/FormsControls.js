import React from "react";
import c from "./FormControls.module.css";
import { Field } from "redux-form";

const FormControl = ({ meta: { touched, error }, children }) => {
  const HasError = touched && error;
  return (
    <div className={c.formControl + " " + (HasError ? c.error : "")}>
      <div>{children}</div>
      {HasError && <span>{error}</span>}
    </div>
  );
};
export const Textarea = (props) => {
  const { input, meta, child, ...resProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...resProps} />
    </FormControl>
  );
};
export const Input = (props) => {
  const { input, meta, child, ...resProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...resProps} />
    </FormControl>
  );
};

export const CreateField = (
  placeholder,
  name,
  component,
  validate,
  props = {},
  text = ""
) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        component={component}
        validate={validate}
        {...props}
      />
      {text}
    </div>
  );
};
