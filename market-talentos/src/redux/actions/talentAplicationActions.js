import { collection, addDoc } from "firebase/firestore";
import { firestore } from '../../firebase/firebaseConfig';
import Swal from "sweetalert2";




export const addmyAplication = (aplicationData) => async () => {
  try {
    console.log(aplicationData);
    await addDoc(collection(firestore, 'postulaciones'), aplicationData);
    Swal.fire(" Good job!", "Oferta publicada de forma exitosa", "success")
  } catch (error) {
    console.error('Hubo problemas al publicar la nueva oferta:', error);
  }
};