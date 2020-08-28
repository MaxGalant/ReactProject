import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ProfileReducer from "./ProfileReduce";
import DialogsReducer from "./DialogReduce";
import SidebarReducer from "./SidebarReduce";
import UserReducer from "./UserReduser";
import AuthReduser from "./AuthReduser";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import AppReduser from "./AppReduser";

let Redusers = combineReducers({
  ProfilePage: ProfileReducer,
  DialogsPage: DialogsReducer,
  SidebarPage: SidebarReducer,
  UsersPage: UserReducer,
  Auth: AuthReduser,
  app: AppReduser,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  Redusers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.store = store;
export default store;
