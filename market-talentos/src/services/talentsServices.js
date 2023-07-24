import { firestore } from "../firebase/firebaseConfig";
import { collections } from "./dates";
import { collection, where, getDocs, query } from "firebase/firestore";

export const getTalentFromTalentsCollection = async (idUsuario) => {
  try {
    const user = [];
    const referenceCollection = collection(firestore, collections.usuarios);
    let q = query(referenceCollection, where("id", "==", idUsuario));
     q = query(referenceCollection, where("uid", "==", idUsuario));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      user.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    console.log("talento", user)
    return user[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getTalentLoggued = async (idTalento) => {
  try {
    const talentLogued = [];
    const referenceCollection = collection(firestore, collections.talentos);
    let q = query(referenceCollection, where("id", "==", idTalento));
     q = query(referenceCollection, where("uid", "==", idTalento));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      talentLogued.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    console.log("talento", talentLogued)
    return talentLogued[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};
