import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    myAplication: [],
};

const myAplicationSlice = createSlice({
    name: 'myApplication',
    initialState,
    reducers: {

        setmyAplication: {
            reducer: (state, action) => {
                state.myAplication = action.payload
            }
        },
    }
})

export const {setmyAplication } = myAplicationSlice.actions;
  
  export default myAplicationSlice.reducer;