import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from '../../firebase/firebaseConfig';
import { setUserTalents } from '../reducers/userTalentReducer';
import { userTypes } from "../types/talentsTypes";
import { setLoading } from "./appActions";

const collectionTalents = collection(firestore, "talentos");
const collectionUsers = collection(firestore, "usuarios");

export const listTalents = () => {
  return async (dispatch) => {
    try {
      const snapshot = await getDocs(collectionTalents);
      const talentArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      dispatch(setUserTalents(talentArray));
    } catch (e) {
      console.error("Error listing document:", e);
    }
  };
};

export const listGeneralUsers = () => {
  return async (dispatch) => {
    try {
      const snapshot = await getDocs(collectionUsers);
      const usersArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      dispatch(setGeneralUsersSync(usersArray));
    } catch (e) {
      console.error("Error listing document:", e);
    }
  };
};

const setGeneralUsersSync = (users) => {
  return {
    type: userTypes.SET_GENERAL_USERS,
    payload: users
  }
}

export const getLoggedUser = (mail) => {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const snapshot = await getDocs(query(collectionUsers, where('email', '==', mail)));
      const usersArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log("user logged", usersArray)
      dispatch(setLoggedUserSync(usersArray));
      dispatch(setLoading(false))
    } catch (e) {
      dispatch(setLoading(false))
      console.error("Error listing document:", e);
    }
  };
};

const setLoggedUserSync = (users) => {
  return {
    type: userTypes.SET_LOGGED_USER,
    payload: users
  }
}
