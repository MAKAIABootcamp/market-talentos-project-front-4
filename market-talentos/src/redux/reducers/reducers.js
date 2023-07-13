import { combineReducers } from '@reduxjs/toolkit';
import userTalentReducer from './userTalentReducer';
import { talentsReducer }from './talentsReducer';


const rootReducer = combineReducers({
  talents: talentsReducer,
  userTalents: userTalentReducer,
  user: userTalentReducer,
  
});

export default rootReducer;
