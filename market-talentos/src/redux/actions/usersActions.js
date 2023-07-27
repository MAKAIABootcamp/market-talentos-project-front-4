import { userTypes, talentsTypes } from "../types/talentsTypes"
import {
  userRegister,
  completeTalentData,
  keepPersistentUserData,
  editTalentData,
} from "../../services/userServices";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import Swal from "sweetalert2";
// -------  función login Asincrona --------------
export const actionLoginAsync = ({ email, password }) => {

  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const { displayName, accessToken, phothoURL, phoneNumber, firstName, lastName } =
          user.auth.currentUser;
        dispatch(
          singInActionSync({
            email,
            firstName,
            lastName,
            name: displayName,
            accessToken,
            phothoURL,
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
        window.location.replace('/login')
        Swal.fire("Usuario o contraseña incorrectos")
        return error
        // dispatch(singInActionSync({ email, error: true, errorMessage }));
      });
  };
};

// -------------- función login sincrona
// const actionLoginSync = (talent) => {
//   return {
//     type: talentsTypes.TALENT_LOGIN,
//     payload: {
//       ...talent,
//     },
//   };
// };

// -------------- función para obtener un usuario logueado
export const getLoggedUsertoken = (token) => {
  return async (dispatch) => {
    try {
      //const response = await keepPersistentUserData(token);
      //console.log(response);
      // dispatch(singInActionSync(response, false));

    } catch (error) {
      console.log(error);
      const showError = {
        code: error.code,
        message: error.message,
      };
      dispatch(singInActionSync({}, showError));
    }

  }
}

// -------------- función para obtener un usuario logueado
export const singInActionSync = (user, error) => {
  return {
    type: userTypes.USER_LOGIN,
    payload: {
      user: user,
      error: error,
    },
  };
};

// funcion asyncrona para desloguearse
export const singOutAsync = () => {
  return (dispatch) => {
    signOut(auth);
    dispatch(singOutSync());
  }
}

// funcion syncrona para desloguearse
const singOutSync = () => {
  return {
    type: userTypes.USER_LOGOUT
  }
}

// funcion asyncrona para registrar un usuario desde el formulario formRegisterTalent

export const registerActionAsync = (user) => {
  return async (dispatch) => {
    try {
      const response = await userRegister(user);
      dispatch(registerActionSync(response, false));
    } catch (error) {
      console.log(error);
      const showError = {
        code: error.code,
        message: error.message
      }
      dispatch(registerActionSync({}, showError));
    }

  }
}

// funcion sincrona para registrar un usuario desde el formulario formRegisterTalent
export const registerActionSync = (user, error) => {
  return {
    type: userTypes.USER_REGITER,
    payload: {
      user: user,
      error: error
    }
  }
}

// funcion asyncrona para completar el perfil de un usuario desde el formulario editProfile
export const completeProfileAsync = (newTalent, type) => {

  return async (dispatch) => {
    try {
      console.log("newTalent", newTalent);
      const talent = await completeTalentData(newTalent, type);
      dispatch(completeProfileSync(talent, false));
    } catch (error) {
      console.log(error);
      const showError = {
        code: error.code,
        message: error.message,
      };
      dispatch(completeProfileSync({}, showError));
      return error
    }
  };
};


// funcion asyncrona para completar el perfil de un usuario desde el formulario editProfile
export const editTalentAsync = (newTalent, type) => {

  return async (dispatch) => {
    try {
      console.log("newTalent", newTalent);
      const talent = await editTalentData(newTalent, type);
      dispatch(editProfileSync(talent, false));
    } catch (error) {
      console.log(error);
      const showError = {
        code: error.code,
        message: error.message,
      };
      dispatch(editProfileSync({}, showError));
      return error
    }
  };
};
// funcion syncrona para completar el perfil de un usuario desde el formulario editProfile
const completeProfileSync = (otherDataUser, error) => {
  return {
    type: userTypes.USER_COMPLETETALENTS,
    payload: {
      otherData: otherDataUser,
      error: error
    },
  };
}
// funcion syncrona para editar el perfil de un usuario desde el formulario editProfile
const editProfileSync = (otherDataUser, error) => {
  return {
    type: userTypes.USER_EDITTALENTS,
    payload: {
      otherData: otherDataUser,
      error: error
    },
  };
}
// función ingresar con google o facebook
// export const actionLoginGoogleOrFacebook = (provider) => {
//   return (dispatch) => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const { displayName, accessToken, photoURL, phoneNumber, email } =
//           result.talent;
//         console.log(result.talent);
//         dispatch(
//           actionLoginSync({
//             email,
//             name: displayName,
//             accessToken,
//             photoURL,
//             phoneNumber,
//             error: false,
//           })
//         );
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.customData.email;
//         console.log(error);
//         console.log(errorCode);
//         console.log(errorMessage);
//         dispatch(actionLoginSync({ email, error: true, errorMessage }));
//       });
//   };
// };

export const saveTalentId = (id) => {
  return {
    type: talentsTypes.SAVE_TALENT_ID,
    payload: id
  }
}

