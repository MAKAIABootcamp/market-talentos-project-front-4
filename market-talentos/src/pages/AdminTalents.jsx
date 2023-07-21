import React, { useEffect } from "react";
import "../style/styleAdminTalents.scss";
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
import { actionDeleteTalentAsync, actionGetTalentAsync , actionEditTalentAsync} from "../redux/actions/validateTalentActions";
import LayoutTalents from "../components/layout/LayoutTalents";
import Footer from "../components/footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import LayoutAdmin from "../components/layout/LayoutAdmin";
// import { swap } from "formik";










const AdminTalents = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  


  useEffect(() => {

    dispatch(actionGetTalentAsync())

  }, []);

  const { talents } = useSelector((state) => state.validateReducer);
  console.log(talents);

  const { uid } = useParams();

  const [detailTalent, setDetailTalent] = useState()
  

  const validacion = () =>{

    // const dataTalents = talents.slice();
    //     const descriptionTalents = dataTalents.find(talent => talent.uid === uid)
    //     console.log(descriptionTalents)
    //     setDetailTalent(descriptionTalents)

       


    const valid = talents.filter((item) => item.validateUser === false);
    console.log(valid);

    const validRef = talents.validateUser 
    
    const defaulValues = {
      validateUser: valid ? valid.validateUser : true,
    
      
    };
    dispatch(actionEditTalentAsync());


  }




















  return (

    <>

      <LayoutAdmin />


        <p className="message__p">Bienvenidos Makaia</p>






      {/* ------------------------Section Tabs----------------------- */}

      <main className="main__container">

        <Tabs className="main__container__tabs">
          {/* ------------------------Section Tabs List----------------------- */}

          <section className="main__container__sectiontabs" >
            <TabList className="main__container__sectiontabsL">
              <Tab className="main__container__sectiontab"> Módulo Talentos</Tab>


            </TabList>

          </section>

          {/* ------------------------Section Tabs Panels----------------------- */}
          <section className="main__container__sectionpanel">
            <TabPanels className="main__container__tl">

              {/* ------------------------Section Tabs Panels Talentos----------------------- */}
              <TabPanel className="main__container__sectiontpanel">
                <div className="main__container__divpanel">
                  <span className="main__container__divpanel1A">
                    <StatGroup>


                      <Stat>
                        <StatLabel className="main__container__divpanel2A">Estado de los Talentos</StatLabel>

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
                          <Th >Role</Th>
                          <Th isNumeric>Estado</Th>
                          <Th >Validación</Th>
                          <Th isNumeric>Eliminar</Th>
                          
                        </Tr>
                      </Thead>

                      <Tbody className="main__container__trbA" >

                        {
                          talents.map((item, index) => (

                            <Tr key={index} className="main__container__thA">

                              <Td> {item.firstName}</Td>
                              <Td>{item.phone}</Td>
                              <Td >{item.email}</Td>
                              <Td>{item.rol}</Td>
                              <Td>{item.validateUser === true ? 'Aceptado' : 'Pendiente' }</Td>



                              <Td className="main__container__tdA">
                                
                              {item.validateUser === true ? <CheckIcon/> : <button
                              
                              onClick={validacion}
                              
                              
                              >Aceptar</button> }
                                
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

export default AdminTalents;