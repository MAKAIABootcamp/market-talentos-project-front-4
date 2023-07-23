import { validateTalents } from "../types/validateTalents";

const talentState = { talents: [] };

export const validateReducer = (state = talentState, action) => {

    switch (action.type) {

        case validateTalents.GET_TALENT:

            return {
                ...state,
                talents: action.payload.talents

            }

        case validateTalents.DELETE_TALENTS:

            return {
                ...state,
                talents: state.talents.filter((cont) =>
                    cont.uid !== action.payload.uid

                )
            }

        case validateTalents.EDIT_TALENTS:

            return {
                ...state,
                talents: state.talents.map((cont) => {
                    const originalTalents = cont;
                    if (cont.uid === action.payload.uid) {
                        originalTalents.validateUser = action.payload.validateUser;

                    }
                    return originalTalents
                })
            }

        case validateTalents.ADD_TALENT:
            return {
                ...state,
                talents: [...state.talents, action.payload],
            };

        default:
            return state;
    }
}