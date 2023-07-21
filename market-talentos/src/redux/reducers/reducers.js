import { combineReducers } from '@reduxjs/toolkit';
import userTalentReducer from './userTalentReducer';
import { talentsReducer } from './talentsReducer';
import userReducer from './userReducer';
import { validateReducer } from './validateReducer';


const rootReducer = combineReducers({
  talents: talentsReducer,
  userTalents: userTalentReducer,
  user: userReducer,
  validateReducer: validateReducer,
});

export default rootReducer;

