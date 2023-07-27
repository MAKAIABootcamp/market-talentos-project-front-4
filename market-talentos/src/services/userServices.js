import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  addDoc,
  updateDoc
} from "firebase/firestore";
import { auth, firestore, dataBase,  } from "../firebase/firebaseConfig";
import { collections } from "./dates";
// import { log } from "util";

export const userRegister = async (user) => {
  const nameCollection = collections.usuarios;
  const referenceCollection = collection(firestore, nameCollection);
  const newUser = await addDoc(referenceCollection, user);
  try {
    await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    return newUser;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const completeTalentData = async (newTalent, type) => {
  try {
    if (type === collections.talentos) {
      const docuRef= doc(dataBase, type, newTalent.id)
      await setDoc(docuRef, newTalent);
      const docuRefUsuario= doc(dataBase, "usuarios", newTalent.id)
      await setDoc(docuRef, newTalent);
    } else {
      return {};
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const editTalentData = async (editTalent, type) => {
  try {
    if (type === collections.talentos) {
      const docuRef= doc(dataBase, type, editTalent.id)
      await updateDoc(docuRef, editTalent);
      
    } else {
      return {};
    }
  } catch (error) {
    console.log(error);
    return error;
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
