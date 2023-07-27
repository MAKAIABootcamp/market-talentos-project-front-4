// import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { setIsLogged } from "../redux/actions/appActions";
import { getLoggedUser } from "../redux/actions/userActions"; 
import FormRegisCustom from "../pages/FormRegisCustom";
import HomeCompany from "../pages/HomeCompany";

const AppRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const {isLogged} = useSelector(store => store.appReducer)
  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setIsLogged(true)
        dispatch(getLoggedUser(user.email)) 
      } else {
        setIsAuthenticated(false);
        setIsLogged(false)
      }
    });
  },[isAuthenticated, setIsAuthenticated, isLogged])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="homeempresas" element={<HomeCompany />} />
            <Route element={<PublicRouter isAutentication={false} />}>
              <Route path="login" element={<LoginTalent />} />
              {/* <Route path="login" element={<Login/>} /> */}
              <Route path="formRegisTalent" element={<FormRegisTalent />} />
              <Route path="formRegisCustom" element={<FormRegisCustom />} />
              {/* <Route path="formRegister" element={< FormRegister/>} /> */}
              {/* <Route path="loginAdmin" element={<LoginAdmin />} /> */}
              <Route path="blog" element={<Blog />} />
              <Route path="about" element={<About />} />
              <Route path="contacts" element={<Contactenos />} />
              <Route path="OfferVacants" element={<OffertVacants />} />
              <Route path="jobOffers" element={<JobOffers />} />
              
            </Route>
            <Route element={<PrivateRouter isAutentication={isAuthenticated} />}>
              <Route path="talents" element={<Talent />}></Route>
              <Route path="searchTalent" element={<SearchTalent />} />
              <Route path="talentDetails/:id" element={<TalentDetails />} />
              <Route path="editProfile/:id" element={<EditProfile />} />
              {/* <Route path="editProfile" element={< FormStudies/>} /> */}
            <Route path="formstudies/:id" element={<FormStudies />} />
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
              <Route path="profileCustomer" element={<ProfileCustomer />} />
              <Route path="jobOffers" element={<JobOffers />} />
              <Route path="homeadmins" element={<HomeAdministrador />} />
              <Route path="adminsT" element={<AdminTalents />} />
              <Route path="adminsV" element={<AdminVacants />} />
              
              
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
