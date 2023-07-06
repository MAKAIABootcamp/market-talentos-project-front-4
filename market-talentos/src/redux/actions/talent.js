import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { talentsTypes } from "../types/talentsTypes";
import { auth } from "../../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";


export const actionRegisterAsync = ({ email, password, name, avatar }) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ talent }) => {
        console.log(talent);
        const { accessToken, photoURL, phoneNumber } = talent.auth.currentUser;
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: avatar,
        });
        dispatch(
          actionRegisterSync({
            email,
            name,
            accessToken,
            photoURL,
            phoneNumber,
            error: false,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        dispatch(actionRegisterAsync({ error: true, errorMessage }));
      });
  };
};

// función registro sincrona
const actionRegisterSync = (talent) => {
  return {
    type: talentsTypes.TALENT_REGISTER,
    payload: {
      ...talent,
    },
  };
};

// función login Asincrona
export const actionLoginAsync = ({ email, password }) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ talent }) => {
        const { displayName, accessToken, photoURL, phoneNumber } =
          talent.auth.currentUser;
        dispatch(
          actionLoginSync({
            email,
            name: displayName,
            accessToken,
            photoURL,
            phoneNumber,
            error: false,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        dispatch(actionLoginSync({ email, error: true, errorMessage }));
      });
  };
};

// función login sincrona
const actionLoginSync = (talent) => {
  return {
    type: talentsTypes.TALENT_LOGIN,
    payload: {
      ...talent,
    },
  };
};

// función logout Asincrona
export const actionLogoutAsync = () => {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch(actionLogoutSync());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


// función logout sincrona
const actionLogoutSync = () => {
  return {
    type: talentsTypes.TALENT_LOGOUT,
  };
};

// función ingresar con google o facebook
export const actionLoginGoogleOrFacebook = (provider) => {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, accessToken, photoURL, phoneNumber, email } =
          result.talent;
        console.log(result.talent);
        dispatch(
          actionLoginSync({
            email,
            name: displayName,
            accessToken,
            photoURL,
            phoneNumber,
            error: false,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        console.log(error);
        console.log(errorCode);
        console.log(errorMessage);
        dispatch(actionLoginSync({ email, error: true, errorMessage }));
      });
  };
};

// nombre de la colección

const collectionName = "talents";

// asyncrona para traer los datos de firebase
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