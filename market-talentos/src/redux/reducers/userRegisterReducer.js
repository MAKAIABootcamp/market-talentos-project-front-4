import { userRegisterTypes } from "../types/talenstRegisterTypes";

const initialState = {
  userRegister: [],
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case userRegisterTypes.USERREGISTER_GET:
      return {
        ...state,
        userRegister: action.payload.userRegister,
      };

    default:
      return state;
  }
};

