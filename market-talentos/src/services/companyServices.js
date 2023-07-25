import { firestore } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const getCompanyFromFirebase = async () => {
  try {
    const company = [];
    const referenceCollection = collection(firestore, 'empresas');
    const querySnapshot = await getDocs(referenceCollection);
    querySnapshot.forEach((doc) => {
        company.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return company;
  } catch (error) {
    console.log(error);
    return null;
  }
};
