import { appTypes } from "../types/appTypes";

const initialState = {
    isLogged: false,
    isLoading: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case appTypes.SET_IS_LOGGED:
            return {
                ...state,
                isLogged: action.payload
            };
        case appTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
}

export default appReducer;