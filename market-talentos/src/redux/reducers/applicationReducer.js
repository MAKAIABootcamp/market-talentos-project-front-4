import { applicationTypes } from "../types/applicationTypes";

const initialState = {
    applications: []
};

const applicationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case applicationTypes.SET_APPLICATIONS:
            return {
                ...state,
                applications: action.payload
            };
        default:
            return state;
    }
}

export default applicationsReducer;