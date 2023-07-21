import { firestore } from "../firebase/firebaseConfig";
import { collections } from "./dates";
import { collection, where, getDocs, query } from "firebase/firestore";

export const getTalentFromTalentsCollection = async (idUsuario) => {
  try {
    const user = [];
    const referenceCollection = collection(firestore, collections.talentos);
    const q = query(referenceCollection, where("idUsuario", "==", idUsuario));

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      user.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return user[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};
