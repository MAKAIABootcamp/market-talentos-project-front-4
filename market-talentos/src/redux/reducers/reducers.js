import { combineReducers } from '@reduxjs/toolkit';
import userTalentReducer from './userTalentReducer';
import { talentsReducer } from './talentsReducer';
import appReducer from './appReducer'
import userReducer from './userReducer';
import OfferJobReducer from './OfferJobReducer';
import { validateReducer } from './validateReducer';
import applicationsReducer from './applicationReducer';


const rootReducer = combineReducers({
  talents: talentsReducer,
  validateReducer: validateReducer,
  userTalents: userTalentReducer,
  user: userReducer,
  offerJob: OfferJobReducer,
  applications: applicationsReducer,
  appReducer: appReducer
});

export default rootReducer;

