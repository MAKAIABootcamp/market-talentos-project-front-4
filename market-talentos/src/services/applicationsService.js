import { firestore } from "../firebase/firebaseConfig";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";

const collectionName = "postulaciones";
const refCollection = collection(firestore, collectionName);
const offerCollectionName = "ofertas";

export const getApplicationsFromFirebase = async () => {
  try {
    const applications = [];
    const querySnapshot = await getDocs(refCollection);
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

export const getApplicationUser = async (idUser) => {
  try {
    const q = query(refCollection, where("talentId", "==", idUser));

    const querySnapshop = await getDocs(q);
    const applications = querySnapshop.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    for (let index = 0; index < applications.length; index++) {
      const offerId = applications[index].offerId || "NA";
      const refApplication = doc(firestore, offerCollectionName, offerId);
      const snapshot = await getDoc(refApplication);
      if (snapshot.exists()) {
        applications[index] = {
          ...applications[index],
          ...snapshot.data(),
          id: applications[index].id,
        };
      }
    }

    return applications;
  } catch (error) {
    console.log(error);
    return [];
  }
};
