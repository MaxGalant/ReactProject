import React from "react";
import { SendMessageActionCreator } from "../../Redax/DialogReduce";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../HOC/AuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    DialogData: state.DialogsPage.DialogData,
    NewMessageText: state.DialogsPage.NewMessageText,
    MessageData: state.DialogsPage.MessageData,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    SendMessageActionCreator: (NewMessageText) => {
      dispatch(SendMessageActionCreator(NewMessageText));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);
