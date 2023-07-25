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
                    cont.uid !== action.payload.uid

                )
            }

        case companyTypes.EDIT_COMPANY:

            return {
                ...state,
                companies: state.companies.map((cont) => {
                    const originalCompany = cont;
                    if (cont.uid === action.payload.uid) {
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