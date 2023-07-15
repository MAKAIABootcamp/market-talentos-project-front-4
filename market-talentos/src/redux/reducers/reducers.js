import { combineReducers } from '@reduxjs/toolkit';
import userTalentReducer from './userTalentReducer';
import { talentsReducer } from './talentsReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
  talents: talentsReducer,
  userTalents: userTalentReducer,
  user: userReducer,
});

export default rootReducer;

