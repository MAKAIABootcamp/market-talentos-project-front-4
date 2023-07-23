import { talentsTypes } from "../types/talentsTypes";
import { getTalentFromTalentsCollection } from "../../services/talentsServices";

export const getTalentAsync = (id) => {
  return async (dispatch) => {
      try {
          const talent = await getTalentFromTalentsCollection(id);
          console.log(talent)
          dispatch(getTalentSync(talent, false))
    } catch (error) {
      console.log(error);
      const showError = {
        code: error.code,
        messsage: error.messsage,
      };
      dispatch(getTalentSync(null, showError));
    }
  };
};

const getTalentSync = (talent, error) => {
  return {
    type: talentsTypes.GET_TALENT,
    payload: {
      talent,
      error,
    },
  };
};
