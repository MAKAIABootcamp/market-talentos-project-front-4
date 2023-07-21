import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { auth, firestore, dataBase } from "../firebase/firebaseConfig";
import { collections } from "./dates";

export const userRegister = async (user) => {
  console.log(user);
  const nameCollection = collections.usuarios;
  const referenceCollection = collection(firestore, nameCollection);
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    await updateProfile(auth.currentUser, {
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
    const collectionName = 'usuarios';
    const usuarioColletion = collection(dataBase, collectionName);
    const docuRef= doc(dataBase,`usuarios/${response.user.uid}`)
    const newUserReference = await setDoc(docuRef, {
      ...user,
      accessToken: response.user.accessToken,
      uid: response.user.uid,
      validateUser: false
    });
    const newUser = {
      ...user,
      password: "",
      id: newUserReference.id,
      accessToken: response.user.accessToken,
      uid: response.user.uid,
    };
    return newUser;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const completeTalentData = async (newTalent, type) => {
  try {
    if (type === collections.talentos) {
      const docuRef= doc(dataBase,`${type}/${newTalent.idUsuario}`)
      console.log(`${type}/${newTalent.idUsuario}`);
      console.log(newTalent);
      const talentReference = collection(firestore, type);

      const talentRef = await setDoc(docuRef, newTalent);
      return {
        
        ...newTalent,
      };
    } else {
      return {};
    }
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const keepPersistentUserData = async (token) => {
  console.log("entré en Keep", token);

  try {
    const user = [];
    const referenceCollection = collection(firestore, collections.usuarios);
    const q = query(referenceCollection, where("accessToken", "==", token));

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      user.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    
    console.log(user);
    return user[0];
  } catch (error) {
    console.log(error);
    return {};
  }
};
