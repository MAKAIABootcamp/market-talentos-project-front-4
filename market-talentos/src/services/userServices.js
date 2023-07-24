import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  addDoc,
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
      const docuRef= doc(dataBase,`${type}/${newTalent.idUsuario}`)
      console.log(`${type}/${newTalent.idUsuario}`);
      console.log(newTalent);
      const talentReference = collection(firestore, type);
      console.log(talentReference, "talentReference");

      const talentRef = await setDoc(docuRef, newTalent);
      console.log(talentRef,"talentRef");
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
