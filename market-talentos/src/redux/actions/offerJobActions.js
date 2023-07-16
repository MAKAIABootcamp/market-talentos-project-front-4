import { collection, getDocs } from "firebase/firestore";
import { firestore } from '../../firebase/firebaseConfig';
import { setOfferJob, addOfferJob } from '../reducers/OfferJobReducer';

  const collectionOfferJob = collection(firestore, "offerJob");

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

//   export const addOfferJob = (jobData) => async () => {
//     try {
//       await firestore().collection('jobs').add(jobData);
//       console.log('Trabajo agregado exitosamente a Firestore');
//     } catch (error) {
//       console.error('Error al agregar el trabajo:', error);
//     }
//   };