import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { talentsTypes } from "../types/talentsTypes";

const collectionName = "talents";

export const actionGetTalentsAsync = () => {
  return async (dispatch) => {
    const talentsCollection = collection(dataBase, collectionName);
    const querySnapshot = await getDocs(talentsCollection);
    const talents = [];
    try {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        talents.push({
          id: doc.id,
          ...doc.data(),
        });
        //   console.log(doc.id, " => ", doc.data());
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(actionGetTalentsSync(talents));
    }
  };
};

const actionGetTalentsSync = (talents) => {
  return {
    type: talentsTypes.TALENTS_GET,
    payload: {
        talents: talents,
    },
  };
};

export const actionAddTalentAsync = (talent) => {
  return async (dispatch) => {
    try {
      const talentsCollection = collection(dataBase, collectionName);
      const docs = await addDoc(talentsCollection, talent);
      dispatch(actionAddTalentSync({ id: docs.id, ...talent }));
    } catch (error) {
      console.log(error);
      dispatch(actionAddTalentSync({}));
    }
  };
};

const actionAddTalentSync = (talent) => {
  return {
    type: talentsTypes.TALENTS_ADD,
    payload: talent,
  };
};

export const actionFilterTalentsAsync = (searchParam, searchValue) => {
  return async (dispatch) => {
    const talentsCollection = collection(dataBase, collectionName);
    const q = query(talentsCollection, where(searchParam, "==", searchValue));
    const talents = [];
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        talents.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(actionFilterTalentsSync(talents));
    }
  };
};

const actionFilterTalentsSync = (talents) => {
  return {
    type: talentsTypes.TALENTS_FILTERED,
    payload: {
        talents: talents,
    },
  };
};


export const actionFilterAsync = (searchParam) => {
  return async (dispatch) => {
    const talentsCollection = collection(dataBase, collectionName);
    const querySnapshot = await getDocs(talentsCollection);
    const talents = [];
    try {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        talents.push({
          id: doc.id,
          ...doc.data(),
        });
        //   console.log(doc.id, " => ", doc.data());
      });
  
      const filterdTalents = talents.filter((item) =>
        item.name.toLowerCase().includes(searchParam.toLowerCase())
      );
      dispatch(actionFilterTalentsSync(filterdTalents));
    } catch (error) {
      console.error(error);
      dispatch(actionFilterTalentsSync([]));
    }
  };
};
