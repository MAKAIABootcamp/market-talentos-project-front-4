import { signInWithEmailAndPassword } from "firebase/auth";
import { setLoading, setUser } from "../reducers/authAdminReducer";
import { auth, firestore } from "../../firebase/firebaseConfig";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));

      // Autenticar al usuario en Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Consultar la colección "admin" en Firestore para buscar al usuario admin
      const adminCollection = firestore.collection("admin");
      const adminSnapshot = await adminCollection.where("email", "==", email).get();

      if (!adminSnapshot.empty) {
        // Si se encuentra el usuario admin en la colección, despachar la acción setUser con el usuario
        dispatch(setUser(user));
      } else {
        // Si no se encuentra el usuario admin en la colección, despachar la acción setUser con null para indicar usuario no encontrado
        dispatch(setUser(null));
      }

      dispatch(setLoading(false));

    } catch (error) {
      console.log("Error de autenticación:", error);
      dispatch(setLoading(false));
    }
  };
};






