import { firestore, dataBase } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const getApplicationsFromFirebase = async () => {
  try {
    const applications = [];
    const querySnapshot = await getDocs(collection(firestore, 'postulaciones'));
    querySnapshot.forEach((doc) => {
        applications.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return applications;
  } catch (error) {
    console.log(error);
    return null;
  }
};
