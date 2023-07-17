import React from "react";
import "../style/styleDashboardHome.scss";
import dev from "../assets/iconDev.png";
import back from "../assets/arrowleft.png";
import NavlinkAdminHome from "../components/navlinAdmin/NavLinkAdminHome";
import { useSelector } from "react-redux";
import { useState } from "react";
import FotoEmpresa from "../../src/assets/logo admin 2.jpeg";
import LogoMakaia from "../../src/assets/Logo.png";
import { DeleteIcon } from '@chakra-ui/icons'


import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  CircularProgressLabel,
  CircularProgress,
} from '@chakra-ui/react'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const collectionFire = [

  {
    "id": 0,
    "title": "Talentos",
    "name": "Douglas Hurley",
    "images": "https://i.ibb.co/wSF8Cbx/image-douglas-hurley.png",
    "registers": "20",
    "hv": "30",

    "role": "Commander",
    "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },



];

const collectionCompany = [

  {
    "id": 0,
    "titlec": "Company",
    "name": "Douglas Hurley",
    "images": "https://i.ibb.co/wSF8Cbx/image-douglas-hurley.png",
    "registersc": "60",
    "hvc": "10",

    "rolec": "Commander",
    "bioc": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },


];

const DashboardHome = () => {
  // const [selectedItem, setSelectedItem] = useState(null);



  const [list] = useState(collectionFire)
  const [value, setValue] = useState(0);
  const { hv, registers, title, role, bio } = list[value]

  const [listC] = useState(collectionCompany)
  const [values, setValues] = useState(0);
  const { hvc, registersc, titlec, rolec, bioc } = listC[values]





  return (

    <>

      <nav className="main__container__navBar">



        <div className="section__contenedor1">
          <figure className="section__back">
            <img src={back} alt="Logo de makaia" width={20} />

          </figure>
          <figure className="section__logomakaia">

            <img src={LogoMakaia} alt="Logo de makaia" />
          </figure>
        </div>



        <div className="section__contenedor13">
          <ul className="main__container__list">
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">Contacto</a>

          </ul>
        </div>

        <div className="section__contenedor12">
          <figure className="section__icon">
            <img src={dev} alt="Logo de makaia" width={40} />
          </figure>
        </div>

      </nav>




      <p className="message__p">Bienvenidos Makaia</p>



      {/* ------------------------Section Tabs----------------------- */}

      <main className="main__container">




        <Tabs className="main__container__tabs">
          {/* ------------------------Section Tabs List----------------------- */}

          <section className="main__container__sectiontabs" >
            <TabList className="main__container__sectiontabsL">
              <Tab className="main__container__sectiontab">Talentos</Tab>
              <Tab className="main__container__sectiontab">Empresas</Tab>
              <Tab className="main__container__sectiontab">Intermediaciones</Tab>
              <Tab className="main__container__sectiontab">Mapeos</Tab>
            </TabList>

          </section>

          {/* ------------------------Section Tabs Panels----------------------- */}
          <section className="main__container__sectionpanel">
            <TabPanels className="main__container__tl">

              {/* ------------------------Section Tabs Panels Talentos----------------------- */}
              <TabPanel className="main__container__sectiontpanel">
                <div className="main__container__divpanel">
                  <span className="main__container__divpanel1">
                    <StatGroup>

                    
                      <Stat>
                        <StatLabel className="main__container__divpanel2">Talentos Registrados</StatLabel>
                        <StatNumber className="main__container__divpanel3">{registers}</StatNumber>
                      </Stat>
                    </StatGroup>
                  </span>
                  <span className="main__container__divpanel1">
                    <StatGroup>
                      <Stat>
                        <StatLabel className="main__container__divpanel2">HV Completadas</StatLabel>
                        <StatNumber className="main__container__divpanel3">{hv}</StatNumber>
                      </Stat>
                    </StatGroup>
                  </span>


                </div>

                <div className="main__container__sectionT">
                  <TableContainer  >
                    <Table variant='striped' colorScheme='teal' className="main__container__tablepanel" >

                      <Thead >
                        <Tr className="main__container__th">
                          <Th>Nombre</Th>
                          <Th>Cédula</Th>
                          <Th isNumeric>Fecha</Th>
                          <Th isNumeric>Estado</Th>
                          <Th isNumeric>Modificación</Th>
                        </Tr>
                      </Thead>
                      <Tbody className="main__container__trb" >
                        <Tr  >
                          <Td>Gesiel Gimenez</Td>
                          <Td>1531206</Td>
                          <Td isNumeric>15/07/2023</Td>
                          <Td>Registrado</Td>
                          <Td isNumeric> <DeleteIcon /> </Td>
                        </Tr>

                      </Tbody>

                      <Tbody className="main__container__tr">
                        <Tr>
                          <Td>Diana Pinzón</Td>
                          <Td>4102563</Td>
                          <Td isNumeric>25/06/2023</Td>
                          <Td>Pendiente</Td>
                          <Td isNumeric> <DeleteIcon /> </Td>
                        </Tr>

                      </Tbody>

                      <Tbody className="main__container__trb">
                        <Tr>
                          <Td>Dego Meriño</Td>
                          <Td>4196758</Td>
                          <Td isNumeric>15/05/2023</Td>
                          <Td>Pendiente</Td>
                          <Td isNumeric> <DeleteIcon /> </Td>
                        </Tr>

                      </Tbody>

                      <Tbody className="main__container__tr">
                        <Tr>
                          <Td>Elizabeth Ospina</Td>
                          <Td>4196731</Td>
                          <Td isNumeric>10/02/2023</Td>
                          <Td>Registrado</Td>
                          <Td isNumeric> <DeleteIcon /> </Td>
                        </Tr>

                      </Tbody>

                      <Tbody className="main__container__trb">
                        <Tr>
                          <Td>Santiago Gomez</Td>
                          <Td>4063758</Td>
                          <Td isNumeric>20/06/2023</Td>
                          <Td>Pendiente</Td>
                          <Td isNumeric> <DeleteIcon /> </Td>
                        </Tr>

                      </Tbody>





                    </Table>
                  </TableContainer>

                </div>



              </TabPanel>

              {/* ------------------------Section Tabs Empresas----------------------- */}

              <TabPanel>

                <div className="main__container__divpanel">
                  <span className="main__container__divpanel4">
                    <StatGroup>
                      <Stat>
                        <StatLabel className="main__container__divpanel5">Empresas Registradas</StatLabel>
                        <StatNumber className="main__container__divpanel6">85</StatNumber>
                      </Stat>
                    </StatGroup>
                  </span>
                  <span className="main__container__divpanel4">
                    <StatGroup>
                      <Stat>
                        <StatLabel className="main__container__divpanel5">Vacantes Registradas</StatLabel>
                        <StatNumber className="main__container__divpanel6">6</StatNumber>
                      </Stat>
                    </StatGroup>
                  </span>

                  <span className="main__container__divpanel4">
                    <StatGroup>
                      <Stat>
                        <StatLabel className="main__container__divpanel5">Lead Company</StatLabel>
                        <StatNumber className="main__container__divpanel6">63</StatNumber>
                      </Stat>
                    </StatGroup>
                  </span>
                </div>

                <div className="main__container__sectionT">
                  <TableContainer  >
                    <Table variant='striped' colorScheme='teal' className="main__container__tablepanel" >

                      <Thead >
                        <Tr className="main__container__th">
                          <Th>Empresa</Th>
                          <Th>Nit</Th>
                          <Th isNumeric>Fecha</Th>
                          <Th isNumeric>Contacto</Th>
                          <Th isNumeric>Modificación</Th>
                        </Tr>
                      </Thead>
                      <Tbody className="main__container__trb1" >
                        <Tr  >
                          <Td>Magneto Group</Td>
                          <Td>91634577</Td>
                          <Td isNumeric>15/07/2023</Td>
                          <Td>3134312456</Td>
                          <Td isNumeric> <DeleteIcon /> </Td>
                        </Tr>

                      </Tbody>

                      <Tbody className="main__container__tr">
                        <Tr>
                          <Td>Software Company</Td>
                          <Td>91034679</Td>
                          <Td isNumeric>25/06/2023</Td>
                          <Td>3006249875</Td>
                          <Td isNumeric> <DeleteIcon /> </Td>
                        </Tr>

                      </Tbody>

                      <Tbody className="main__container__trb1">
                        <Tr>
                          <Td>Makaia</Td>
                          <Td>93649712</Td>
                          <Td isNumeric>15/05/2023</Td>
                          <Td>3126954875</Td>
                          <Td isNumeric> <DeleteIcon /> </Td>
                        </Tr>

                      </Tbody>

                      <Tbody className="main__container__tr">
                        <Tr>
                          <Td>Company 2</Td>
                          <Td>4196731</Td>
                          <Td isNumeric>10/02/2023</Td>
                          <Td>64696576</Td>
                          <Td isNumeric> <DeleteIcon /> </Td>
                        </Tr>

                      </Tbody>

                      <Tbody className="main__container__trb1">
                        <Tr>
                          <Td>Company 3</Td>
                          <Td>4063758</Td>
                          <Td isNumeric>20/06/2023</Td>
                          <Td>313205495</Td>
                          <Td isNumeric> <DeleteIcon /> </Td>
                        </Tr>

                      </Tbody>





                    </Table>
                  </TableContainer>

                </div>
                {/* ------------------------Section Tabs Panels Intermediaciones----------------------- */}
              </TabPanel>
              <TabPanel>
                <div className="main__container__divpanel">
                  <span className="main__container__divpanel1">
                    <StatGroup>
                      <Stat>
                        <StatLabel className="main__container__divpanel2">Vacantes Creadas</StatLabel>
                        <StatNumber className="main__container__divpanel3">50</StatNumber>
                      </Stat>
                    </StatGroup>
                  </span>
                  <span className="main__container__divpanel1">
                    <StatGroup>
                      <Stat>
                        <StatLabel className="main__container__divpanel2">Vacantes Activas</StatLabel>
                        <StatNumber className="main__container__divpanel3">20</StatNumber>
                      </Stat>
                    </StatGroup>
                  </span>
                  <span className="main__container__divpanel1">
                    <StatGroup>
                      <Stat>
                        <StatLabel className="main__container__divpanel2">Talentos Remitidos</StatLabel>
                        <StatNumber className="main__container__divpanel3">18</StatNumber>
                      </Stat>
                    </StatGroup>
                  </span>
                </div>

                <div className="main__container__sectionT">
                  <TableContainer  >
                    <Table variant='striped' colorScheme='teal' className="main__container__tablepanel" >

                      <Thead >
                        <Tr className="main__container__th">
                          <Th>Nombre</Th>
                          <Th>Cédula</Th>
                          <Th isNumeric>Fecha</Th>
                          <Th isNumeric>Estado</Th>
                          <Th isNumeric>Modificación</Th>
                        </Tr>
                      </Thead>
                      <Tbody className="main__container__trb" >
                        <Tr  >
                          <Td>Gesiel Gimenez</Td>
                          <Td>1531206</Td>
                          <Td isNumeric>15/07/2023</Td>
                          <Td>Registrado</Td>
                          <Td isNumeric> <DeleteIcon /> </Td>
                        </Tr>

                      </Tbody>

                      <Tbody className="main__container__tr">
                        <Tr>
                          <Td>Diana Pinzón</Td>
                          <Td>4102563</Td>
                          <Td isNumeric>25/06/2023</Td>
                          <Td>Pendiente</Td>
                          <Td isNumeric> <DeleteIcon /> </Td>
                        </Tr>

                      </Tbody>

                      <Tbody className="main__container__trb">
                        <Tr>
                          <Td>Dego Meriño</Td>
                          <Td>4196758</Td>
                          <Td isNumeric>15/05/2023</Td>
                          <Td>Pendiente</Td>
                          <Td isNumeric> <DeleteIcon /> </Td>
                        </Tr>

                      </Tbody>

                      <Tbody className="main__container__tr">
                        <Tr>
                          <Td>Elizabeth Ospina</Td>
                          <Td>4196731</Td>
                          <Td isNumeric>10/02/2023</Td>
                          <Td>Registrado</Td>
                          <Td isNumeric> <DeleteIcon /> </Td>
                        </Tr>

                      </Tbody>

                      <Tbody className="main__container__trb">
                        <Tr>
                          <Td>Santiago Gomez</Td>
                          <Td>4063758</Td>
                          <Td isNumeric>20/06/2023</Td>
                          <Td>Pendiente</Td>
                          <Td isNumeric> <DeleteIcon /> </Td>
                        </Tr>

                      </Tbody>





                    </Table>
                  </TableContainer>

                </div>















              </TabPanel>
              {/* <TabPanel>
                <p>four!</p>
              </TabPanel> */}
            </TabPanels>
          </section>
        </Tabs>




      </main >
    </>
  );
};

export default DashboardHome;
