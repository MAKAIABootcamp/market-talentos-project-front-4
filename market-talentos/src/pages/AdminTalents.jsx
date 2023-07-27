import React, { useEffect } from "react";
import "../style/styleAdminTalents.scss";
import { useDispatch, useSelector } from "react-redux";
import { DeleteIcon, CheckIcon } from '@chakra-ui/icons';
import Swal from "sweetalert2";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { actionDeleteTalentAsync, actionGetTalentAsync, actionEditTalentAsync, actionAddTalentAsync } from "../redux/actions/validateTalentActions";
import Footer from "../components/footer/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import LayoutAdminS from "../components/layout/LayoutAdminSimple";
import LayoutAdmin from "../components/layout/LayoutAdmin";


const AdminTalents = () => {

  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(actionGetTalentAsync())
  }, );
  const { talents } = useSelector((state) => state.validateReducer);
  

  const validacion = (talento) => {
    const dataTalents = talents.slice();
    const descriptionTalents = dataTalents.find(talent => talent.id === talento.id);
    if (descriptionTalents !== undefined && descriptionTalents !== null) {
      descriptionTalents.validateUser = true;
      dispatch(actionEditTalentAsync(descriptionTalents));
      dispatch(actionAddTalentAsync(descriptionTalents));
      dispatch(actionGetTalentAsync());
      alert("Talento aprobado con éxito")
    } else { 
      alert("No se encontró el talento")
    }
  }

  return (
    <>
      {/* -------------Header---------------------------- */}
   
      <LayoutAdmin/>

      {/* -------------Welcome Message---------------------------- */}
      <div className="infoAdminUp">
      <p className="message__pt" >Bienvenido Administrador</p>
      </div>
      {/* ------------------------Main----------------------- */}
      <main className="main__container">

        {/* -------------Section Tabs---------------------------- */}
        <Tabs className="main__container__tabs">
          {/* ------------------------ Tabs List----------------------- */}
          <section className="main__container__sectiontabs" >
            <TabList className="main__container__sectiontabsL">
              <Tab className="main__container__sectiontab"> Validación de Talentos</Tab>
            </TabList>
          </section>
          {/* ------------------------Tabs Panels----------------------- */}
          <section className="main__container__sectionpanel">
            <TabPanels className="main__container__tl">

              <TabPanel className="main__container__sectiontpanel">
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



                              <Td >

                                {item.validateUser === true ? <CheckIcon /> : <button

                                  onClick={() => validacion(item)}
                                  className="main__container__tdA"

                                >Aceptar</button>}

                              </Td>

                              <Td>

                                <button className="main__container__tdL">
                                  <NavLink className="main__container__tdLink" to={`/talentDetails/${item.id}`}> Perfil </NavLink>
                                </button>

                              </Td>


                              <Td > <DeleteIcon
                                onClick={() => {

                                  dispatch(actionDeleteTalentAsync(item));
                                  dispatch(actionGetTalentAsync());
                                  Swal.fire({
                                    title: "Se ha eliminado con éxito",
                                    icon: "success",
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
            </TabPanels>
          </section>
        </Tabs>
      </main >

      <Footer />
    </>
  );
};

export default AdminTalents;