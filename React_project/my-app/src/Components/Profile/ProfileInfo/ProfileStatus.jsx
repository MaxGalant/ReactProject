import c from "./ProfileInfo.module.css";
import React from "react";
import { ProfileApi } from "../../../API/API";
class ProfileStatus extends React.Component {
  state = { EditMode: false, Status: this.props.Status };
  ActivateEditMode() {
    this.setState({ EditMode: true });
  }
  DeactivateEditMode = () => {
    this.setState({ EditMode: false });
    this.props.UpdateStatus(this.state.status);
  };
  OnStatusChanged = (e) => {
    this.setState({
      Status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    debugger;
    if (prevProps.Status !== this.props.Status) {
      this.setState({ status: this.props.status });
    }
  }
  render() {
    return (
      <div>
        {!this.state.EditMode && (
          <div>
            <span onDoubleClick={this.ActivateEditMode.bind(this)}>
              {this.props.Status}
            </span>
          </div>
        )}
        {this.state.EditMode && (
          <div>
            <input
              onChange={this.OnStatusChanged}
              autoFocus={true}
              value={this.props.status}
              onBlur={this.DeactivateEditMode.bind(this)}
            ></input>
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
