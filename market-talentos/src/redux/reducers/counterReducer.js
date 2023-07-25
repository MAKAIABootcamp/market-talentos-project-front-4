import {typesCounter} from '../types/counterTypes';

const initialState = {
    count: 1
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesCounter.INCREMENT_COUNTER:
            console.log("entramos");
            return {
                    ...state,
                    count: state.count+1
            };
        case typesCounter.DECREMENT_COUNTER:
            return {
                ...state,
                count: state.count>1 ? state.count - 1 : state.count = 1
            };

        case typesCounter.RESET_COUNTER:
            return {
                ...state,
                count: 1
            };

        default:
            return state;
    }
};

