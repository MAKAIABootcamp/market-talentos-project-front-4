import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firestore, auth } from '../../firebase/firebaseConfig';


// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { setLoading, setError, signInSuccess, signOutSuccess } from "../reducers/authAdminReducer"
// import { auth } from "../../firebase/firebaseConfig";

// export const login = (email, password) => {
//     return async (dispatch) => {
//         try {
//             dispatch(setLoading(true));

//             const userCredential = await signInWithEmailAndPassword(auth, email, password)
//             const user = userCredential.user;
//             console.log("user", user)
//             dispatch(signInSuccess(user));
//             dispatch(setLoading(false));
//         } catch (error) {
//             dispatch(setError(error.message));
//             dispatch(setLoading(false));
//         }
//     }
// }

// export const loginAsync = createAsyncThunk(
//     'admin/login',
//     async ({ email, password }, { rejectWithValue }) => {
//       try {
//         // Realiza la autenticación con el email y la contraseña proporcionados
//         await signInWithEmailAndPassword(auth, email, password);
  
//         // Consulta la colección "admin" en Firestore para buscar al usuario admin
//         const adminCollection = collection(firestore, 'admin');
//         const q = query(adminCollection, where('email', '==', email));
//         const querySnapshot = await getDocs(q);
  
//         // Verifica si se encontró un usuario admin con el email proporcionado
//         if (querySnapshot.size === 1) {
//           // Si se encuentra el usuario admin, retorna los datos del admin
//           const admin = querySnapshot.docs[0].data();
//           return admin;
//         } else {
//           // Si no se encuentra el usuario admin, lanza un error con un mensaje personalizado
//           throw new Error('Usuario o contraseña incorrectos');
//         }
//       } catch (error) {
//         // Captura el error y lo rechaza con el valor del error para que Redux Toolkit lo maneje
//         return rejectWithValue(error.message);
//       }
//     }
