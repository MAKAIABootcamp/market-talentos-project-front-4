import { collection, getDocs } from "firebase/firestore";
import { firestore } from '../../firebase/firebaseConfig';
import { setUserTalents } from '../reducers/userTalentReducer';

  const collectionTalents = collection(firestore, "talents");

  export const listTalents = () => {
    return async (dispatch) => {
      try {
        const snapshot = await getDocs(collectionTalents);
        const talentArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        dispatch(setUserTalents(talentArray));
      } catch (e) {
        console.error("Error listing document:", e);
      }
    };
  };

