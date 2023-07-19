import { talentsTypes } from "../types/talentsTypes";

const initialState = {
  talents: [],
  error: null,
  talentSelected: null,
};

export const talentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case talentsTypes.GET_TALENT:
      return {
        ...state,
        talentSelected: action.payload.talent,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
