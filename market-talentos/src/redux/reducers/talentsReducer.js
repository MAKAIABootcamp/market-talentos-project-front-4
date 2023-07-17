import { talentsTypes } from '../types/talentsTypes';

const initialState = {
    talents: [],
    selectedTalentId: null
}

export const talentsReducer = (state = initialState, action) => {
    switch (action.type) {

        case talentsTypes.TALENT_REGISTER: 
            return {
                ...action.payload,
            };

        case talentsTypes.TALENTS_ADD:
            return {
                ...state,
                talents: [...state.payload, action.payload],
            };
        case talentsTypes.TALENTS_FILTERED:
            return {
                ...state,
                talents: action.payload.talents,
            };
        default:
            return state;
    }
}

