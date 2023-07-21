import { collection, getDocs, addDoc } from "firebase/firestore";
import { firestore } from '../../firebase/firebaseConfig';
import { setOfferJob } from '../reducers/OfferJobReducer';
import Swal from "sweetalert2";

const collectionOfferJob = collection(firestore, "ofertas");

export const listOfferJob = () => {
  return async (dispatch) => {
    try {
      const snapshot = await getDocs(collectionOfferJob);
      const offerJobArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log(offerJobArray);
      dispatch(setOfferJob(offerJobArray));
    } catch (e) {
      console.error("Error listing document:", e);
    }
  };
};


export const addOfferJob = (jobData) => async () => {
  try {
    await addDoc(collection(firestore, 'ofertas'), jobData);
    Swal.fire(" Good job!", "Oferta publicada de forma exitosa", "success")
  } catch (error) {
    console.error('Hubieron problemas al publicar la nueva oferta:', error);
  }
};