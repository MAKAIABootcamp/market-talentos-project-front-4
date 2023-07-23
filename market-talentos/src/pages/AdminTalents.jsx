import React, { useEffect } from "react";
import "../style/styleAdminTalents.scss";
import { useDispatch, useSelector } from "react-redux";
import { DeleteIcon, CheckIcon } from '@chakra-ui/icons';
import Swal from "sweetalert2";


import {
  Stat,
  StatLabel,
  StatGroup,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
 
  TableContainer,
 
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { actionDeleteTalentAsync, actionGetTalentAsync, actionEditTalentAsync, actionAddTalentAsync } from "../redux/actions/validateTalentActions";
import Footer from "../components/footer/Footer";
import LayoutAdmin from "../components/layout/LayoutAdmin";
import { NavLink } from "react-router-dom";


const AdminTalents = () => {

  const dispatch = useDispatch();
  

  useEffect(() => {

    dispatch(actionGetTalentAsync())

  }, []);

  const { talents } = useSelector((state) => state.validateReducer);
  console.log(talents);






  const validacion = (uid) => {
    const dataTalents = talents.slice();
    const descriptionTalents = dataTalents.find(talent => talent.uid === uid);
    if (descriptionTalents) {
      descriptionTalents.validateUser = true;     
      dispatch(actionEditTalentAsync(descriptionTalents));
      dispatch(actionAddTalentAsync(descriptionTalents));
      dispatch(actionGetTalentAsync());
      alert("Talento aprobado con éxito")
    } else  {
      alert("No se encontró el talento")
    }
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
                          <Th >Ver Detalles</Th>
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
                              <Td>{item.validateUser === true ? 'Aceptado' : 'Pendiente'}</Td>



                              <Td className="main__container__tdA">

                                {item.validateUser === true ? <CheckIcon /> : <button

                                  onClick={() => validacion(item.uid)}


                                >Aceptar</button>}

                              </Td>

                              <Td>

                                <button>
                                <NavLink to="/talentDetails"> Perfil </NavLink>
                                </button>

                              </Td>


                              <Td > <DeleteIcon
                                onClick={() => {

                                  dispatch(actionDeleteTalentAsync(item));
                                  dispatch(actionGetTalentAsync());
                                  Swal.fire({                                    
                                    title: "Se ha eliminado con éxito",
                                    icon:  "success", 
                                  });
                                


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

            
            </TabPanels>
          </section>
        </Tabs>





      </main >

      <Footer />
    </>
  );
};

export default AdminTalents;