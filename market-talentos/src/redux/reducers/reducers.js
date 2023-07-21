import { combineReducers } from '@reduxjs/toolkit';
import userTalentReducer from './userTalentReducer';
import { talentsReducer } from './talentsReducer';
import userReducer from './userReducer';
import OfferJobReducer from './OfferJobReducer';


const rootReducer = combineReducers({
  talents: talentsReducer,
  userTalents: userTalentReducer,
  user: userReducer,
  offerJob: OfferJobReducer
});

export default rootReducer;

