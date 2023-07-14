import { signInWithEmailAndPassword } from "firebase/auth";
import { setLoading, setUser } from "../reducers/authAdminReducer";
import { auth, firestore } from "../../firebase/firebaseConfig";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const adminCollection = firestore.collection("admin");
      const adminSnapshot = await adminCollection.where("email", "==", email).get();

      if (!adminSnapshot.empty) {
        dispatch(setUser(user));
      } else {
        
        dispatch(setUser(null));
      }

      dispatch(setLoading(false));

    } catch (error) {
      console.log("Error de autenticación:", error);
      dispatch(setLoading(false));
    }
  };
};






