import { collection, getDocs, doc, deleteDoc, updateDoc, addDoc, where, query} from "firebase/firestore";
import { validateTalents } from "../types/validateTalents";
import { dataBase } from "../../firebase/firebaseConfig";


const collectionName = 'usuarios';

export const actionGetTalentAsync = () => {
    return async (dispatch) => {
        const talentCollection = collection(dataBase, collectionName);
        const querySnapshot = await getDocs(talentCollection);
        const talents = [];
        try {
            querySnapshot.forEach((doc) => {
                talents.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
        } catch (error) {
            console.log(error);
        }finally{
            dispatch(actionGetTalentSync(talents));
        }
    }
}

const actionGetTalentSync = (talents) => {
    const talentsArr = talents.filter(item => item.type === 'talentos')
    return {
        type: validateTalents.GET_TALENT,
        payload: {
           talents : talentsArr
        }
    }
}

export const actionDeleteTalentAsync =(talents) => {
    return  async (dispatch) => {
        const talentRef = doc(dataBase, collectionName, talents.id)
        try {
            await deleteDoc(talentRef);
            dispatch(actionDeleteTalentSync(talents))
        } catch (error) {
            console.log(error);
            dispatch(actionDeleteTalentSync({
                error: true,
                errorMessage: error.message
            }))
        }        
    }
}

const actionDeleteTalentSync = (talents) => {
    return {
        type: validateTalents.DELETE_TALENTS,
        payload: {id: talents.id}
    }
}

export const actionEditTalentAsync = (talentEdit) => {
    return async (dispatch) => {
      const id =  talentEdit.id
      const talentRefs = doc(dataBase, collectionName, id);
      try {
        await updateDoc(talentRefs, talentEdit);
        dispatch(
          actionEditTalentSync({
            id: talentRefs.id,
            ...talentEdit,
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  const actionEditTalentSync = (talentEdit) => {
    return {
      type:validateTalents.EDIT_TALENTS,
      payload: { ...talentEdit },
    };
  };

  const collectionTalento = "talentos";

export const actionAddTalentAsync = (usuario) => {
  return async (dispatch) => {
    try {
      const talentoCollection = collection(dataBase, collectionTalento);
      const docs = await addDoc(talentoCollection, usuario);
      dispatch(actionAddTalentSync({ id: docs.id, ...usuario }));
    } catch (error) {
      console.log(error);
      dispatch(actionAddTalentSync({}));
    }
  };
};

const actionAddTalentSync = (usuario) => {
  return {
    type: validateTalents.ADD_TALENT,
    payload: usuario,
  };
};

// acciones de filtrado y busqueda en la colección de talentos

export const actionFilterTalentAsync = (searchParam, searchValue) => {
  return async (dispatch) => {
    const talentCollection = collection(dataBase, collectionTalento);
    const q = query(talentCollection, where(searchParam, "==", searchValue));
    const wordSearch = [];
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        wordSearch.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(actionFilterTalentsSync(wordSearch));
    }
  };
};

const actionFilterTalentsSync = (wordSearch) => {
  return {
    type: validateTalents.FILTER_TALENTS,
    payload: {
      talents: wordSearch,
    },
  };
};


export const actionFilterAsync = (searchParam) => {
  return async (dispatch) => {
    const  talentCollection = collection(dataBase, collectionName);
    const querySnapshot = await getDocs( talentCollection);
    const talentosSearch = [];
    try {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        talentosSearch.push({
          id: doc.id,
          ...doc.data(),
        });
        //   console.log(doc.id, " => ", doc.data());
      });
  
      const filterdTalentos = talentosSearch.filter((item) =>
        item.name.toLowerCase().includes(searchParam.toLowerCase())
      );
      dispatch(actionFilterTalentsSync(filterdTalentos));
    } catch (error) {
      console.error(error);
      dispatch(actionFilterTalentsSync([]));
    }
  };
};

