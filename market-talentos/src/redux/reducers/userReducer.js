import { userTypes } from "../types/talentsTypes";

const initialState = {
  user: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.USER_LOGIN:
      return {
        ...state,
        user: action.payload.user,
        error: action.payload.error,
      };
    case userTypes.USER_REGITER:
      return {
        ...state,
        user: action.payload.user,
        error: action.payload.error,
      };
    case userTypes.USER_LOGOUT:
          return initialState;
      
      case userTypes.USER_COMPLETETALENTS:
          return {
            ...state,
            user: {
              ...state.user,
              ...action.payload.otherData,
              },
            error: action.payload.error
          };

    default:
      return state;
  }
};

export default userReducer;
