import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, withRouter, BrowserRouter } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UserContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import { connect, Provider } from "react-redux";
import { GetAuthUserData } from "./Redax/AuthReduser";
import { compose } from "redux";
import { InitializeApp } from "./Redax/AppReduser";
import Preloader from "./Components/Common/Preloader";
import store from "./Redax/Redux-Store";

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
let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { InitializeApp })
)(App);
let MainApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default MainApp;
