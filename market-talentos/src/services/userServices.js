import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc, doc, updateDoc, query, where, getDocs } from "firebase/firestore";
import { auth, firestore } from "../firebase/firebaseConfig";

const usersCollections = [
  {
    id: 1,
    name: "talents",
  },
  {
    id: 2,
    name: "admin",
  },
  {
    id: 3,
    name: "customer",
  },
];

export const userRegister = async (user) => {
  console.log(user);
  const nameCollection = usersCollections.find(
    (item) => item.name === user.type
  ).name;
  const referenceCollection = collection(firestore, nameCollection);
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    await updateProfile(auth.currentUser, {
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
    const newUserReference = await addDoc(referenceCollection, {
      ...user,
        accessToken: response.user.accessToken,
      uid: response.user.uid
    });
    const newUser = {
      ...user,
      password: "",
      id: newUserReference.id,
      accessToken: response.user.accessToken,
      uid: response.user.uid,
    };
    return newUser;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const completeTalentData = async ({otherTalentData, id, type}) => {
  try {
    if (type === "talents") {
      const talentReference = doc(
        firestore,
        type,
        id
        );
        
        await updateDoc(talentReference, {...otherTalentData});
    } else {
      return {};
    }
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const keepPersistentUserData = async (token) => {
    console.log("entré en Keep");

    try {
        const user =[];
        for (const element of usersCollections) {
            const referenceCollection = collection(firestore, element.name);
            const q = query(
              referenceCollection,
              where("accessToken", "==", token)
            );

            const querySnapshot = await getDocs(q);

            querySnapshot.forEach(doc => {
                user.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            return user[0];

        }   
    } catch (error) {
        console.log(error);
        return{}
    }
}
