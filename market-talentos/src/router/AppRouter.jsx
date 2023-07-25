// import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Administrator from "../components/adminLayout/Administrator";
import Customer from "../pages/Customer";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
// import LoginAdmin from "../pages/LoginAdmin";
import LoginTalent from "../pages/LoginTalent";
import Portfolio from "../pages/Portfolio";
import Talent from "../pages/Talent";
import FormRegisTalent from "../pages/FormRegisTalent";
import Curriculum from "../pages/Curriculum";
import SearchTalent from "../pages/SearchTalent";
import FormRegisCustom from "../pages/FormRegisCustom";
import ProfileCustomer from "../pages/ProfileCustomer";
import JobOffers from "../pages/JobOffers";
import Blog from "../pages/Blog";
import TalentDetails from "../pages/TalentDetails";
import HomeEmpresas from "../pages/HomeEmpresas";
import SearchCompany from "../pages/SearchCompany";
import EditProfile from "../pages/EditProfile";
import FormStudies from "../pages/FormStudies";
import TalentOfferJob from "../pages/TalentOfferJob";
import JobApplicatioTalent from "../pages/JobApplicatioTalent";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, dataBase } from "../firebase/firebaseConfig";
// import { getLoggedUser,  singInActionSync } from "../redux/actions/usersActions";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
// import Spinner from 'react-bootstrap/Spinner';
// import FormRegisAdmin from '../pages/FormRegisAdmin';
// import HomeAdmin from '../pages/HomeAdmin';
import DashboardHome from "../pages/DashboardHome";
import OffertVacants from "../pages/OffertVacants";
// import { doc, getDoc } from "@firebase/firestore";
// import Login from "../pages/Login";
// import FormRegister from "../pages/FormRegister";
import HomeAdministrador from "../pages/HomeAdministrador";
import AdminTalents from "../pages/AdminTalents";
import AdminVacants from "../pages/AdminVacants";
import Contactenos from "../pages/Contactenos";
import About from "../pages/About";

const AppRouter = () => {
  const { isLogged } = useSelector((state) => state.appReducer);
  // const [loggedUser, setLoggedUser] = useState(null);
  // const dispatch = useDispatch();
  // const [isLogged, setIsLogged] = useState(null);
  // const { user: loggedUser} = useSelector((state) => state.user);
  // const [loading, setLoading] = useState(true);
  // console.log(loggedUser);

  // Funcion para datos del usuario y persistencia
  // const traerInfo = async (uid, accessToken) => {
  //   const docRef = doc(dataBase, `usuarios/${uid}`);
  //   const docu = await getDoc(docRef);
  //   console.log(docu);
  //   const dataFinal = docu.data();
  //   console.log(uid);
  //   console.log(dataFinal);

  //   dispatch(
  //     singInActionSync({
  //       displayName:dataFinal.displayName,
  //       firstName: dataFinal.firstName,
  //       typeUser: dataFinal. typeUser,
  //       email: dataFinal.email,
  //       accessToken,
  //       phoneNumber: dataFinal.phoneNumber,
  //       rol: dataFinal.rol,
  //       cohorte: dataFinal.cohorte,
  //       type: dataFinal.type,
  //       photoURL: dataFinal.photoURL,
  //       lastName:dataFinal.lastName,
  //       id:uid,
  //       validateUser: dataFinal.validateUser,
  //       uid,
  //       error: false,

  //     })
  //   );
  // };

  //   useEffect(() => {
  //     onAuthStateChanged(auth, (user) => {
  //       if (user?.uid) {
  //         console.log(user.uid);
  //         console.log(loggedUser);
  //         setIsLogged(true);

  //         // if (!loggedUser) {
  //         //   dispatch(getLoggedUser(user?.accessToken));
  //         //   console.log(loggedUser);
  //         //   // user.getIdToken().then((token) => {
  //         //   //   dispatch(getLoggedUser(token));
  //         //   // });
  //         // }
  //       } else {
  //         setIsLogged(false);
  //       }
  //         setLoading(false);
  //         if (user?.auth.currentUser) {
  //           if (!loggedUser) {
  //             const {
  //               displayName,
  //               firstName,
  //               lastName,
  //               email,
  //               phoneNumber,
  //               accessToken,
  //               photoURL,
  //               id,
  //               uid,
  //               cohorte,
  //               type,
  //               rol,
  //               validateUser,
  //             } = user.auth.currentUser;

  //             traerInfo(uid, accessToken);
  //             console.log(displayName, email, phoneNumber,lastName, photoURL, firstName, id, validateUser );
  //             console.log('usuario logueado',loggedUser);
  //           }
  //         }
  //       });
  //   }, [setIsLogged, loading]);
  //   if (loading) {
  //     return <Spinner animation="border" />;
  //   }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="formStudies" element={<FormStudies />} />
            <Route element={<PublicRouter isAutentication={isLogged} />}>
              <Route path="login" element={<LoginTalent />} />
              {/* <Route path="login" element={<Login/>} /> */}
              <Route path="formRegisTalent" element={<FormRegisTalent />} />
              {/* <Route path="formRegister" element={< FormRegister/>} /> */}
              {/* <Route path="loginAdmin" element={<LoginAdmin />} /> */}
              <Route path="blog" element={<Blog />} />
              <Route path="about" element={<About />} />
              <Route path="contacts" element={<Contactenos />} />
              <Route path="OfferVacants" element={<OffertVacants />} />
            </Route>
            <Route element={<PrivateRouter isAutentication={isLogged} />}>
              <Route path="talents" element={<Talent />}></Route>
              <Route path="searchTalent" element={<SearchTalent />} />
              <Route path="talentDetails" element={<TalentDetails />} />
              <Route path="editProfile" element={<EditProfile />} />
              {/* <Route path="editProfile" element={< FormStudies/>} /> */}
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="curriculum" element={<Curriculum />} />
              <Route path="jobTalent" element={<JobApplicatioTalent />} />
              <Route path="talentOfferJob" element={<TalentOfferJob />} />
              {/* <Route path="talentsAll" element={<TalentsAll />} /> */}
              <Route path="admin" element={<Administrator />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="dash" element={<DashboardHome />} />
              <Route path="homecompany" element={<HomeEmpresas />} />
              <Route path="searchcompany" element={<SearchCompany />} />
              <Route path="customer" element={<Customer />} />
              <Route path="formRegisCustom" element={<FormRegisCustom />} />
              <Route path="profileCustomer" element={<ProfileCustomer />} />
              <Route path="jobOffers" element={<JobOffers />} />
              <Route path="homeadmins" element={<HomeAdministrador />} />
              <Route path="adminsT" element={<AdminTalents />} />
              <Route path="adminsV" element={<AdminVacants />} />
              <Route path="OfferVacants" element={<OffertVacants />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
