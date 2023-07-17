import React, { useState } from "react";
import FotoEmpresa from "../../assets/logo admin 2.jpeg";
import LogoMakaia from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";
import "../../style/styleNavLinkAdmin.scss";
import {
  Step,
  Box,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react'



const collectionFire = [
  {
    "id": 0,
    "title": "Slider 1",
    "nameC": "Company",
    "nameT": "Talentos",
    "nameI": "Intermediaciones",
    "nameM": "Mapeos",
    "images": "https://i.ibb.co/wSF8Cbx/image-douglas-hurley.png",

    "role": "Commander",
    "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },

];






const NavlinkAdmin = () => {

  // const [selectedItem, setSelectedItem] = useState(null);

  const [collection] = useState(collectionFire)
  const [value, setValue] = useState(0);

  const { nameT, nameC, nameI, nameM, images, role, bio } = collection[value]

  // const [selectedItem, setSelectedItem] = useState(null);

  // const [collectionTwo] = useState(collectionCompany)
  // const [values, setValues] = useState(0);

  // const { nameC, imagesC, roleC, bioC } = collectionTwo[values]




  return (
    <div className="section__contenedor1">
      <figure className="section__logomakaia">
        <img src={LogoMakaia} alt="Logo de makaia" />
      </figure>
      <h3 className="section__welcome">Bienvenido (namecompany)</h3>
      <div className="section__infocompany">

        <figure className="section__logoadmin">
          <img src={FotoEmpresa} alt="" />
        </figure>
        <h3>Andres Martinez</h3>
        <h4>Company</h4>



      </div>
      <div className="section__containerbutton">


        <ul className="lista__botones">
          {collectionFire.map((item, index) => (
            < li key={item.id} >
              <button
                onClick={() => setValue(index)}
                className={`${index === value}`}
              >
                <div className="button__slider">
                  {/* <span>Dashboards1</span> */}
                  <h2>{nameT}</h2>


                  {/* <BsCircleFill /> */}
                </div>


              </button>
            </li>
          ))}



          {/* ----------- */}

          {collectionFire.map((item, index) => (
            < li key={item.id} >
              <button
                onClick={() => setValue(index)}
                className={`${index === value}`}
              >
                <div className="button__slider">
                  {/* <span>Dashboards1</span> */}
                  <h2>{nameC}</h2>

                  {/* <BsCircleFill /> */}
                </div>


              </button>
            </li>
          ))}





          {collectionFire.map((item, index) => (
            < li key={item.id} >
              <button
                onClick={() => setValue(index)}
                className={`${index === value}`}
              >
                <div className="button__slider">
                  {/* <span>Dashboards1</span> */}
                  <h2>{nameI}</h2>

                  {/* <BsCircleFill /> */}
                </div>


              </button>
            </li>
          ))}




          {collectionFire.map((item, index) => (
            < li key={item.id} >
              <button
                onClick={() => setValue(index)}
                className={`${index === value}`}
              >
                <div className="button__slider">
                  {/* <span>Dashboards1</span> */}
                  <h2>{nameM}</h2>

                  {/* <BsCircleFill /> */}
                </div>


              </button>
            </li>
          ))}


        </ul>




        {/* <NavLink
          to="/buscarpizza"
          activeClassName="active"
          className="link-style"
        >
          <button>Dashboards</button>
        </NavLink> */}
        {/* <NavLink
          to="/buscarpizza"
          activeClassName="active"
          className="link-style"
        >
          <button>Talentos</button>
        </NavLink>
        <NavLink
          to="/buscarpizza"
          activeClassName="active"
          className="link-style"
        >
          <button>Empresas</button>
        </NavLink>
        <NavLink
          to="/buscarpizza"
          activeClassName="active"
          className="link-style"
        >
          <button>Mapeos</button>
        </NavLink>
        <NavLink
          to="/buscarpizza"
          activeClassName="active"
          className="link-style"
        >
          <button>Referidos</button>
        </NavLink> */}
      </div>
    </div>
  );

};

export default NavlinkAdmin;


