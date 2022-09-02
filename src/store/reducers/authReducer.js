import { LOGIN, LOGOUT } from "./../types/constants";
let initialState = {
  isAuthenticated: false,
  cUser: {},
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      let isUserLogginedNow = true;
      let user = action.payload;

      return {
        ...state,
        isAuthenticated: isUserLogginedNow,
        cUser: user,
      };
    }
    case LOGOUT: {
      let isUserLogginedNow = false;
      return {
        ...state,
        isAuthenticated: isUserLogginedNow,
        cUser: {},
      };
    }

    default:
      return state;
  }
};

export default authReducer;
