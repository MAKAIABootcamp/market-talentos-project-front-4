import React from 'react'
import LayoutTalents from '../components/layout/LayoutTalents'
import { NavLink } from 'react-router-dom'
import { LayoutGroup } from 'framer-motion'
import LayoutAdminS from '../components/layout/LayoutAdminSimple'
import Footer from '../components/footer/Footer'
import "../style/styledHomeAdministrador.scss";
import bannerAd from "../assets/bannerAd.png";





const HomeAdministrador = () => {
  return (
    <div >
  <LayoutAdminS/> 



    <main className='admin__talents-main'>

      <div>
        <figure>
          <img src={bannerAd} alt="" width={1200}/>
        </figure>
      </div>

      <ul className="admin__talentsU" >

      <li className="admin__talents-L">
        <button className="admin__talentsB">

        <NavLink className="admin__talentsN" to="/adminsT"> Talentos</NavLink>
        </button>
      </li>

      <li>
    <button className="admin__talents-button">
        <NavLink to="/jobOffers"> Vacantes </NavLink>
        </button>
      </li>

      <li>
    <button className="admin__talents-button">
        <NavLink to="/dash"> DashBoards</NavLink>
        </button>
      </li>


      </ul>
      


    </main>
    

    <Footer/>
    </div>

  )
}

export default HomeAdministrador;