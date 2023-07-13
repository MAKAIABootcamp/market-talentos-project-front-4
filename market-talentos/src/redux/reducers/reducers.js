import { combineReducers } from "@reduxjs/toolkit";
import userTalentReducer from "./userTalentReducer";
import { talentsReducer } from "./talentsReducer";
import { UserReducer } from "./userRegisterReducer";

const rootReducer = combineReducers({
  talents: talentsReducer,
  userTalents: userTalentReducer,
  userRegister: UserReducer,
});

export default rootReducer;
