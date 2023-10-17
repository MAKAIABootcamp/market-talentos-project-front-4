import { applicationTypes } from "../types/applicationTypes";
import {
  getApplicationsFromFirebase,
  getApplicationUser,
} from "../../services/applicationsService";

export const setApplicationsSync = (applications) => {
  return {
    type: applicationTypes.SET_APPLICATIONS,
    payload: applications,
  };
};

export const getApplicationsAsync = () => {
  return async (dispatch) => {
    try {
      const applications = await getApplicationsFromFirebase();
      dispatch(setApplicationsSync(applications));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getApplicationsUserAsync = (idUser) => {
  return async (dispatch) => {
    try {
      const response = await getApplicationUser(idUser);
      dispatch(setApplicationsSync(response));
    } catch (error) {
      console.log(error);
    }
  };
};
