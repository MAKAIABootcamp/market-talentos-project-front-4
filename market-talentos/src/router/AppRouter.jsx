import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Administrator from '../pages/Administrator';
import Customer from '../pages/Customer';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import LoginAdmin from '../pages/loginAdmin/LoginAdmin';
import LoginTalent from '../pages/LoginTalent';
import Portfolio from '../pages/Portfolio';
import Talent from '../pages/Talent';
import FormRegisTalent from '../pages/FormRegisTalent';
import Curriculum from '../pages/Curriculum';
import SearchTalent from '../pages/SearchTalent';
import FormRegisCustom from '../pages/FormRegisCustom';
import ProfileCustomer from '../pages/ProfileCustomer';
import JobOffers from '../pages/JobOffers';
import Blog from '../pages/Blog';
import TalentDetails from '../pages/TalentDetails';
import HomeEmpresas from '../pages/HomeEmpresas';
import SearchCompany from '../pages/SearchCompany';
// import TalentsAll from '../pages/TalentsAll';
// import EditProfile from '../pages/EditProfile';
import TalentsAll from "../pages/TalentsAll";
import EditProfile from "../pages/EditProfile";
import TalentOfferJob from "../pages/TalentOfferJob";
import JobApplicatioTalent from "../pages/JobApplicatioTalent"

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="talents" element={<Talent />}></Route>
          <Route path="loginTalent" element={<LoginTalent />} />
          <Route path="formRegisTalent" element={<FormRegisTalent />} />
          <Route path="searchTalent" element={<SearchTalent />} />
          <Route path="talentDetails" element={<TalentDetails />} />
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="jobTalent" element={<JobApplicatioTalent />} />
          <Route path="talentOfferJob" element={<TalentOfferJob />} />
          <Route path="talentsAll" element={<TalentsAll />} />
          {/* </Route> */}
          <Route path="admin" element={<Administrator />} />
          <Route path="loginAdmin" element={<LoginAdmin />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path='homecompany' element={<HomeEmpresas />} />
          <Route path='searchcompany' element={<SearchCompany />} />
          <Route path="customer" element={<Customer />}/>
            <Route path="formRegisCustom" element={<FormRegisCustom />} />
            <Route path="profileCustomer" element={<ProfileCustomer />} />
            <Route path='jobOffers' element={<JobOffers />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
