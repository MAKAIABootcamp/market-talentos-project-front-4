import { appTypes } from "../types/appTypes";

const initialState = {
    applications: []
};

const applicationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case appTypes.SET_APPLICATIONS:
            return {
                ...state,
                applications: action.payload
            };
        default:
            return state;
    }
}

export default applicationsReducer;