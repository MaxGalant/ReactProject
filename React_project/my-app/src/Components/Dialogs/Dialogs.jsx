import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../Common/FormControls/FormsControls";
import {
  RequireField,
  MaxLengthCreator,
} from "../Utilse/Validators/Validators";
const Dialogs = (props) => {
  let DialogElements = props.DialogData.map((d) => (
    <DialogItem src={d.src} name={d.name} id={d.id} />
  ));

  let MessageElements = props.MessageData.map((m) => (
    <Message message={m.message} />
  ));

  let AddNewMessage = (value) => {
    props.SendMessageActionCreator(value.NewMessageText);
  };
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItem}>{DialogElements}</div>
      <div className={c.messages}>
        {MessageElements}
        <AddMessageFormRedux onSubmit={AddNewMessage} />
      </div>
    </div>
  );
};
let MaxLength200 = MaxLengthCreator(200);
const AddMessageForm = (props) => {
  return (
    <form className={c.AddMessage} onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[RequireField, MaxLength200]}
        name={"NewMessageText"}
        placeholder="Enter your message"
      ></Field>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "DialogAddMessageForm" })(
  AddMessageForm
);
export default Dialogs;
