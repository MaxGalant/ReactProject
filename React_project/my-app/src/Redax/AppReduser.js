import { GetAuthUserData } from "./AuthReduser";

const SET_INTIALIZED = "SET_INTIALIZED";
let InitialState = {
  initialized: false,
};
const AppReduser = (State = InitialState, action) => {
  switch (action.type) {
    case SET_INTIALIZED: {
      return {
        ...State,
        initialized: true,
      };
    }
    default:
      return State;
  }
};
export const SetInitialized = () => {
  return {
    type: SET_INTIALIZED,
  };
};
export let InitializeApp = () => (dispatch) => {
  let promise = dispatch(GetAuthUserData());
  promise.then(() => {
    dispatch(SetInitialized());
  });
};

export default AppReduser;
