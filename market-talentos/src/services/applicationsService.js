import { firestore } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const getApplicationsFromFirebase = async () => {
  try {
    const applications = [];
    const referenceCollection = collection(firestore, 'postulaciones');
    const querySnapshot = await getDocs(referenceCollection);
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
