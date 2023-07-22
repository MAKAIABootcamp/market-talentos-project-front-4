import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducers';
import { validateReducer } from "../reducers/validateReducer";


const store = configureStore({
  reducer: rootReducer,
  middleware:[thunk]
    })

export default store;