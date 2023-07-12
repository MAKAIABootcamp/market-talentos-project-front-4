import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admin: null,
    loading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
       setUser: (state, action) => {
        state.admin = action.payload
       },

       setLoading: (state, action) => {
        state.user = action.payload
       }
    }
})

export const { setUser, setLoading } =authSlice.actions;

export default authSlice.reducer;