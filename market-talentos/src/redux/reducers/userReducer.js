import { userTypes, talentsTypes } from "../types/talentsTypes";

const initialState = {
  user: null,
  error: null,
  selectedTalentId: null,
  generalUsers:[],
  loggedUser: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.USER_LOGIN:
      return {
        ...state,
        user: action.payload.user,
        error: action.payload.error,
      };

    case userTypes.SET_GENERAL_USERS:
      return {
        ...state,
        generalUsers: action.payload
      };

    case userTypes.SET_LOGGED_USER:
      return {
        ...state,
        loggedUser: action.payload
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

    case talentsTypes.SAVE_TALENT_ID:
      return {
        ...state,
        selectedTalentId: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
