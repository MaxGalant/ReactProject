import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UserContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { InitializeApp } from "./Redax/AppReduser";
import Preloader from "./Components/Common/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.InitializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app_wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            exactssss
            path="/profile/:userId?"
            render={() => <ProfileContainer />}
          />
          <Route exact path="/users" render={() => <UserContainer />} />
          <Route exact path="/dialogs" render={() => <DialogsContainer />} />
          <Route exact path="/news" render={() => <DialogsContainer />} />
          <Route exact path="/music" render={() => <DialogsContainer />} />
          <Route exact path="/settings" render={() => <DialogsContainer />} />
          <Route exact path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default compose(
  withRouter,
  connect(mapStateToProps, { InitializeApp })
)(App);
