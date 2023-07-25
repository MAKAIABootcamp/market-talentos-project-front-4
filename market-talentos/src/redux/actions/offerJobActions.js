import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
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
    console.error('Hubo problemas al publicar la nueva oferta:', error);
  }
};

export const searchOffer = (idOffer) => {
  return async (dispatch) => {
    try {
      const snapshot = await getDocs(collectionOfferJob);
      let offerJobArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      offerJobArray = offerJobArray.filter((item) => item.id === idOffer);
      console.log(offerJobArray);
      dispatch(setOfferJob(offerJobArray));
    } catch (e) {
      console.error("Error listing document:", e);
    }
  };
}

export const updateOfferJob = (jobData, idOffer) => async () => {
  try {
    const offerRef = doc(collection(firestore, 'ofertas'), idOffer);
    console.log(idOffer);
    

    await updateDoc(offerRef, jobData);
    
    Swal.fire("Good job!", "Oferta actualizada de forma exitosa", "success");
  } catch (error) {
    console.error('Hubo problemas al actualizar la oferta:', error);
  }
};

export const deleteOfferJob = (idOffer) => async() => {
  try {

    const offerRef = doc(collection(firestore, 'ofertas'), idOffer);
    
    await deleteDoc(offerRef);
    listOfferJob();
    
    Swal.fire("Good job!", "Oferta eliminada de forma exitosa", "success");
  } catch (error) {
    console.error('Hubo problemas al eliminar la oferta:', error);
  }
};