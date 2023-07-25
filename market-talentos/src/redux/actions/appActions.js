import { appTypes } from "../types/appTypes";

export const setIsLogged = (isLogged) => {
    return {
        type: appTypes.SET_IS_LOGGED,
        payload: isLogged
      }
};

export const setLoading = (loading) => {
    return {
        type: appTypes.SET_IS_LOADING,
        payload: loading
      }
};