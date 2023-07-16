import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userTalents: [],
    selectedTalentId: null
};

const userTalentSlice = createSlice({
    name: 'frontends',
    initialState,
    reducers: {

        setUserTalents: {
            reducer: (state, action) => {
                state.userTalents = action.payload
            }
        }

    }
})

export const { setUserTalents} = userTalentSlice.actions;
  
  export default userTalentSlice.reducer;
