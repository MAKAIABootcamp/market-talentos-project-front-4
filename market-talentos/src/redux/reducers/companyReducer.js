import {companyTypes} from '../types/companyTypes'

const initialState = { 
    companies: [] 
};

export const companyReducer = (state = initialState, action) => {

    switch (action.type) {

        case companyTypes.SET_COMPANY:

            return {
                    ...state,
                    companies: action.payload
                };
           
        case companyTypes.DELETE_COMPANY:

            return {
                ...state,
                companies: state.companies.filter((cont) =>
                    cont.id !== action.payload.id

                )
            }

        case companyTypes.EDIT_COMPANY:

            return {
                ...state,
                companies: state.companies.map((cont) => {
                    const originalCompany = cont;
                    if (cont.id === action.payload.id) {
                        originalCompany.validateUser = action.payload.validateUser;

                    }
                    return originalCompany;
                })
            }

        case companyTypes.ADD_COMPANY:
            return {
                ...state,
                companies: [...state.companies, action.payload],
            };

        default:
            return state;
    }
}

export default companyReducer;