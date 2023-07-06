import { configureStore } from "@reduxjs/toolkit";
import { talentsReducer } from "../reducers/talentsReducer";

const reducer = {
   talentsStore: talentsReducer,
};

const store = configureStore({
   reducer,
   devTool: process.env.NODE_ENV !== "production",
   middleware:(getDefaultMiddleware)=>
   getDefaultMiddleware({
      serializableCheck:false,
   }),
});

export default store;