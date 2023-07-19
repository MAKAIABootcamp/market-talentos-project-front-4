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
      const talentReference = collection(firestore, type);

      const talentRef = await addDoc(talentReference, newTalent);
      return {
        idTalent: talentRef.id,
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
    // for (const element of usersCollections) {
    //   const referenceCollection = collection(firestore, element.name);
    //   const q = query(referenceCollection, where("accessToken", "==", token));

    //     const querySnapshot = await getDocs(q);
    //     console.log(querySnapshot);
    //     querySnapshot.forEach((doc) => {
    //       user.push({
    //         id: doc.id,
    //         ...doc.data(),
    //       });
    //     });

    //   const docSnap = await getDoc(q);
    //   if (docSnap.exists()) {
    //     console.log(docSnap.data());
    //     return {
    //       id: docSnap.id,
    //       ...docSnap.data(),
    //     };
    //   }
    // }
    console.log(user);
    return user[0];
  } catch (error) {
    console.log(error);
    return {};
  }
};
