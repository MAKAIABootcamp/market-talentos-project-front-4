import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    offerJob: [],
};

const offerJobSlice = createSlice({
    name: 'offerJob',
    initialState,
    reducers: {

        setOfferJob: {
            reducer: (state, action) => {
                state.offerJob = action.payload
            }
        },

        // addOfferJob: {
        //     reducer: (state, action) => {
        //       state.offerJob.push(action.payload);
        //     },
        //     prepare: (data) => {
        //       return { payload: data };
        //     },
        //   },

    }
})

export const { setOfferJob} = offerJobSlice.actions;
  
  export default offerJobSlice.reducer;