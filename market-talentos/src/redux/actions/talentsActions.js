import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { firestore, auth } from "../../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { talentsTypes } from "../types/talentsTypes";
import { sendEmailVerification } from "firebase/auth";






export const registerActionAsync = ({ email, password, name, avatar }) => {
  return async (dispatch) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile (auth.currentUser,{
        displayName: name,
        photoURL :avatar,
      });

          // Envío del correo de verificación
          await sendEmailVerification(auth.currentUser);


      const { accessToken } = user.auth.currentUser;
        console.log(user);
      
      dispatch(registerActionSync({ email, name, avatar, accessToken }, null));
    } catch (error) {
      console.log(error);
      dispatch(
        registerActionSync({}, { code: error.code, message: error.message })
      );
    }
  };
};

const registerActionSync = (newUser, error) => {
  return {
    type: talentsTypes.TALENT_REGISTER,
    payload: {
      user: newUser,
      error: error,
    },
  };
};

// Acción de registro asíncrona
// export const actionRegisterAsync = ({ email, password, name, avatar }) => {
//   return (dispatch) => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(async ({ talent }) => {
//         const { accessToken, photoURL, phoneNumber } =
//           talent.auth.currentUser;
//         await updateProfile(auth.currentUser, {
//           displayName: name,
//           photoURL: avatar,
//         });
//         dispatch(
//           actionRegisterSync({
//             email,
//             name,
//             accessToken,
//             photoURL,
//             phoneNumber,
//             error: false,
//           })
//         );
//       })
//       .catch((error) => {
//         const { code, message } = error;
//         console.log(code);
//         console.log(message);
//         dispatch(actionRegisterError({ error: true, errorMessage: message }));
//       });
//   };
// };

// // Acción de registro sincrónica
// const actionRegisterSync = (talent) => {
//   return {
//     type: talentsTypes.TALENT_REGISTER,
//     payload: {
//       ...talent,
//     },
//   };
// };

// // Acción de registro con error
// const actionRegisterError = (error) => {
//   return {
//     type: talentsTypes.TALENT_REGISTER_ERROR,
//     payload: {
//       ...error,
//     },
//   };
// };

// const actionAddTalentsSync = (talent) => {
//   return {
//     type: talentsTypes.TALENTS_ADD,
//     payload: talent,
//   };
// };



// Acción de registro asíncrona
// export const actionRegisterAsync = ({ email, password, name, avatar }) => {
//   return (dispatch) => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(async ({ talent }) => {
//         const { accessToken, photoURL, phoneNumber } =
//           talent.auth.currentUser;
//         await updateProfile(auth.currentUser, {
//           displayName: name,
//           photoURL: avatar,
//         });
//         dispatch(
//           actionRegisterSync({
//             email,
//             name,
//             accessToken,
//             photoURL,
//             phoneNumber,
//             error: false,
//           })
//         );
//       })
//       .catch((error) => {
//         const { code, message } = error;
//         console.log(code);
//         console.log(message);
//         dispatch(actionRegisterError({ error: true, errorMessage: message }));
//       });
//   };
// };

// // Acción de registro sincrónica
// const actionRegisterSync = (talent) => {
//   return {
//     type: talentsTypes.TALENT_REGISTER,
//     payload: {
//       ...talent,
//     },
//   };
// };

// // Acción de registro con error
// const actionRegisterError = (error) => {
//   return {
//     type: talentsTypes.TALENT_REGISTER_ERROR,
//     payload: {
//       ...error,
//     },
//   };
// };

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

export const actionAddTalentAsync = (talent) => {
  return async (dispatch) => {
    try {
      const talentsCollection = collection(firestore, collectionName);
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
    const talentsCollection = collection(firestore, collectionName);
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
    const talentsCollection = collection(firestore, collectionName);
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

