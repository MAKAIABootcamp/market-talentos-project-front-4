import { combineReducers } from '@reduxjs/toolkit';
import userTalentReducer from './userTalentReducer';
import { talentsReducer } from './talentsReducer';
import userReducer from './userReducer';
import OfferJobReducer from './OfferJobReducer';
import { validateReducer } from './validateReducer';


const rootReducer = combineReducers({
  talents: talentsReducer,
  validateReducer: validateReducer,
  userTalents: userTalentReducer,
  user: userReducer,
  offerJob: OfferJobReducer
});

export default rootReducer;

