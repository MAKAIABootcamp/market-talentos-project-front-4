import React, { useEffect } from "react";
import "../style/styleAdminVacants.scss";
import { useDispatch, useSelector } from "react-redux";
import { DeleteIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';
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
import { actionDeleteTalentAsync, actionGetTalentAsync } from "../redux/actions/validateTalentActions";
import Footer from "../components/footer/Footer";
import LayoutAdmin from "../components/layout/LayoutAdmin";




const AdminVacants = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(actionGetTalentAsync())

  }, );

  const { talents } = useSelector((state) => state.validateReducer);
  console.log(talents);



  return (

    <>

      <LayoutAdmin />
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

                                }} />
                                <CloseIcon
                                  onClick={() => {
                                    dispatch(actionDeleteTalentAsync(item));
                                    Swal.fire("Se ha eliminado con éxito", "success");

                                  }} />
                              </Td>
                              <Td > <DeleteIcon
                                onClick={() => {
                                  dispatch(actionDeleteTalentAsync(item));
                                  Swal.fire("Se ha eliminado con éxito", "success");

                                }}/> </Td>                         
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

export default AdminVacants;