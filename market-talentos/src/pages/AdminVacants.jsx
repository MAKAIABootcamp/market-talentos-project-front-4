import React, { useEffect } from "react";
import "../style/styleAdminVacants.scss";
import dev from "../assets/iconDev.png";
import back from "../assets/arrowleft.png";
import NavlinkAdminHome from "../components/navlinAdmin/NavLinkAdminHome";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import FotoEmpresa from "../../src/assets/logo admin 2.jpeg";
import LogoMakaia from "../../src/assets/Logo.png";
import { DeleteIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';
import Swal from "sweetalert2";


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
import { actionDeleteTalentAsync, actionGetTalentAsync } from "../redux/actions/validateTalentActions";
import Footer from "../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import LayoutAdmin from "../components/layout/LayoutAdmin";
// import { swap } from "formik";




const AdminVacants = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();



  useEffect(() => {

    dispatch(actionGetTalentAsync())

  }, []);

  const { talents } = useSelector((state) => state.validateReducer);
  console.log(talents);



  return (

    <>

      <LayoutAdmin />


      {/* <nav className="main__container__navBar">



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

      </nav> */}




      <p className="message__p">Bienvenidos Makaia</p>






      {/* ------------------------Section Tabs----------------------- */}

      <main className="main__container">

        <Tabs className="main__container__tabs">
          {/* ------------------------Section Tabs List----------------------- */}

          <section className="main__container__sectiontabs" >
            <TabList className="main__container__sectiontabsL">
              <Tab className="main__container__sectiontab"> Módulo Vacantes</Tab>


            </TabList>

          </section>

          {/* ------------------------Section Tabs Panels----------------------- */}
          <section className="main__container__sectionpanel">
            <TabPanels className="main__container__tl">

              {/* ------------------------Section Tabs Panels Talentos----------------------- */}
              <TabPanel className="main__container__sectiontpanel">
                <div className="main__container__divpanel">
                  <span className="main__container__divpanel1V">
                    <StatGroup>


                      <Stat>
                        <StatLabel className="main__container__divpanel2V">Registrar Vacante</StatLabel>

                      </Stat>
                    </StatGroup>
                  </span>


                </div>

                <div className="main__container__sectionT">
                  <TableContainer  >
                    <Table variant='striped' colorScheme='teal' className="main__container__tablepanelA" >




                      <Thead >
                        <Tr className="main__container__th">
                          <Th>Nombre</Th>
                          <Th>Contacto</Th>
                          <Th isNumeric>Correo</Th>
                          <Th isNumeric>Cohorte</Th>
                          <Th >Role</Th>
                          <Th >Estado</Th>
                          <Th isNumeric>Modificación</Th>
                          
                        </Tr>
                      </Thead>

                      <Tbody className="main__container__trbA" >

                        {
                          talents.map((item, index) => (

                            <Tr key={index} className="main__container__thA">

                              <Td> {item.firstName}</Td>
                              <Td>{item.phone}</Td>
                              <Td >{item.email}</Td>
                              <Td>{item.cohorte}</Td>
                              <Td>{item.rol}</Td>



                              <Td className="main__container__tdA"> <CheckIcon
                                onClick={() => {

                                  dispatch(actionDeleteTalentAsync(item));
                                  Swal.fire("Se ha eliminado con éxito", "success");


                                }}


                              />


                                <CloseIcon
                                  onClick={() => {

                                    dispatch(actionDeleteTalentAsync(item));
                                    Swal.fire("Se ha eliminado con éxito", "success");


                                  }}


                                />


                              </Td>
                              <Td > <DeleteIcon
                                onClick={() => {

                                  dispatch(actionDeleteTalentAsync(item));
                                  Swal.fire("Se ha eliminado con éxito", "success");


                                }}


                              /> </Td>

                             


                            </Tr>



                          ))
                        }




                      </Tbody>







                    </Table>
                  </TableContainer>

                </div>



              </TabPanel>

              {/* ------------------------Section Tabs Empresas----------------------- */}


              {/* ------------------------Section Tabs Panels Intermediaciones----------------------- */}

              {/* <TabPanel>
                <p>four!</p>
              </TabPanel> */}
            </TabPanels>
          </section>
        </Tabs>





      </main >

      <Footer />
    </>
  );
};

export default AdminVacants;