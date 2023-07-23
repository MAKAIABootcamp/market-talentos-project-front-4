import { companyTypes } from "../types/companyTypes";
import { getCompanyFromFirebase } from "../../services/companyServices";

export const setcompanySync = (companies) => {
    return {
        type: companyTypes.SET_COMPANY,
        payload: companies
      }
};

export const getcompanyAsync = () => {
    return async (dispatch) => {
        try {
            const companies = await getCompanyFromFirebase();
            dispatch(setcompanySync(companies))
      } catch (error) {
        console.log(error);
      }
    };
};