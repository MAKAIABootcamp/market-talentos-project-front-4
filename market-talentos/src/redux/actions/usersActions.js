import { userTypes, talentsTypes } from "../types/talentsTypes"
import {
  userRegister,
  completeTalentData,
  keepPersistentUserData,
} from "../../services/userServices";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";


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

export const registerActionSync = (user, error) => {
    return {
        type: userTypes.USER_REGITER,
        payload: {
            user: user,
            error: error
        }
    }
}

export const saveTalentId = (id) => {
  return {
      type: talentsTypes.SAVE_TALENT_ID,
      payload: id
  }
}

export const completeProfileAsync = ({ otherTalentData, id, type }) => {
  return async (dispatch) => {
    try {
        await completeTalentData({ otherTalentData, id, type });
        dispatch(completeProfileSync({...otherTalentData}, false));
    } catch (error) {
      console.log(error);
      const showError = {
        code: error.code,
        message: error.message,
      };
      dispatch(completeProfileSync({}, showError));
    }
  };
};

const completeProfileSync = (otherDataUser, error) => {
    return {
      type: userTypes.USER_COMPLETETALENTS,
      payload: {
        otherData: otherDataUser,
        error: error
      },
    };
}


export const getLoggedUser = (token) => {
    return async (dispatch) => {
        try {
            const response = await keepPersistentUserData(token);
            console.log(response);
            dispatch(singInActionSync(response, false));
            
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

export const singInActionSync = (user, error) => {
  return {
    type: userTypes.USER_LOGIN,
    payload: {
      user: user,
      error: error,
    },
  };
};

export const singOutAsync = () => {
    return async (dispatch) => {
        try {
            await signOut(auth);
            dispatch(singOutSync());
        } catch (error) {
            console.log(error);

        }
    }
}

const singOutSync = () => {
    return {
        type: userTypes.USER_LOGOUT
    }
}

export const actionLoginAsync = ({ email, password }) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const { displayName, accessToken, photoURL, phoneNumber } =
          user.auth.currentUser;
        dispatch(
          singInActionSync({
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
        dispatch(singInActionSync({ email, error: true, errorMessage }));
      });
  };
};
