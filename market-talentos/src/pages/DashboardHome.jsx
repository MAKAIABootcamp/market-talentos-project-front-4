import React, { useEffect, useState } from "react";
import "../style/styleDashboardHome.scss";
import { useDispatch, useSelector } from "react-redux";
import { DeleteIcon, TimeIcon, ExternalLinkIcon, CheckCircleIcon, ArrowRightIcon, EditIcon, StarIcon } from '@chakra-ui/icons';
import {
  Stat,
  StatLabel,
  StatNumber,
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
import { useNavigate } from "react-router-dom";
import { listOfferJob } from '../redux/actions/offerJobActions';
import { getApplicationsAsync } from "../redux/actions/applicationActions";
import { getcompanyAsync } from "../redux/actions/companyActions";
import LayoutAdminS from "../components/layout/LayoutAdminSimple";


const DashboardHome = () => {
  const { talents } = useSelector((store) => store.validateReducer);
  const { applications } = useSelector((store) => store.applications);
  const offerJobList = useSelector((state) => state.offerJob);
  const { companies } = useSelector((state) => state.companies);
  const [totalTalents, setTotalTalents] = useState(0);
  const [completedProfiles, setCompletedProfiles] = useState(0);
  const [offers, setOffers] = useState(0);
  const [activeOffers, setActiveOffers] = useState(0);
  const [postulaciones, setPostulaciones] = useState(0);
  const [empresas, setEmpresas] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetTalentAsync());
    dispatch(listOfferJob());
    dispatch(getApplicationsAsync());
    dispatch(getcompanyAsync());

  }, );

  useEffect(() => {
    const completedProfilesArray = talents.filter(item => item.completedProfile === true)
    setTotalTalents(talents.length);
    setCompletedProfiles(completedProfilesArray.length)
  }, [talents]);

  useEffect(() => {
    const activeOffers = offerJobList.offerJob.filter(offer => new Date(offer.closeDate.seconds * 1000 + offer.closeDate.nanoseconds / 1000000) > new Date())
    setOffers(offerJobList.offerJob.length);
    setActiveOffers(activeOffers.length)
  }, [offerJobList]);

  useEffect(() => {
    setPostulaciones(applications.length)
    console.log("postulaciones", applications)
  }, [applications]);

  useEffect(() => {
    setEmpresas(companies.length)
    console.log("companies", companies)
  }, [companies]);


  return (
    <>
      <LayoutAdminS />

      {/* ------------------------Section Tabs----------------------- */}
      <main className="main__container">
        <Tabs className="main__container__tabsAd">
          {/* ------------------------Section Tabs List----------------------- */}
          <section className="main__container__sectiontabsAd" >
            <TabList className="main__container__sectiontabsLad">
              <Tab className="main__container__sectiontabAd">Dashboards</Tab>
            </TabList>
          </section>
          {/* ------------------------Section Tabs Panels----------------------- */}
          <section className="main__container__sectionpanelAd">
            <TabPanels className="main__container__tl">
              {/* ------------------------Section Tabs Panels Talentos----------------------- */}
              <TabPanel className="main__container__sectiontpanel">
                <div className="main__container__divpanel">
                  <span className="main__container__divpanel1">
                    <StatGroup className="insigths">
                      <Stat >
                        <div className="upInfo">
                          <StatLabel className="main__container__divpanel2"><CheckCircleIcon /></StatLabel>
                          <StatLabel className="main__container__divpanel2">Talentos Registrados</StatLabel>
                        </div>
                        <div className="upInfo1">
                          <StatNumber className="main__container__divpanel3Ad">{totalTalents} </StatNumber>
                        </div>
                        <div className="upInfo3">
                          <span>Indicador ingresos</span>
                        </div>
                      </Stat>
                    </StatGroup>
                  </span>
                  <span className="main__container__divpanel1">
                    <StatGroup>
                      <Stat className="insigths">
                        <div className="upInfo">
                          <StatLabel className="main__container__divpanel2"><ArrowRightIcon /></StatLabel>
                          <StatLabel className="main__container__divpanel2">HV Completadas</StatLabel>
                        </div>
                        <div className="upInfo1">
                          <StatNumber className="main__container__divpanel3Ad">{completedProfiles}</StatNumber>
                        </div>
                        <div className="upInfo3">
                          <span>Indicador seguimiento</span>
                        </div>
                      </Stat>
                    </StatGroup>
                  </span>

                  <span className="main__container__divpanel1">
                    <StatGroup>
                      <Stat className="insigths">
                        <div className="upInfo">
                          <StatLabel className="main__container__divpanel2"><EditIcon /></StatLabel>
                          <StatLabel className="main__container__divpanel2">Vacantes Resgistradas</StatLabel>
                        </div>
                        <div className="upInfo1">
                          <StatNumber className="main__container__divpanel3Ad">{offers}</StatNumber>
                        </div>
                        <div className="upInfo3">
                          <span>Indicador registros</span>
                        </div>
                      </Stat>
                    </StatGroup>
                  </span>

                </div>

                <div className="main__container__divpanel">

                  <span className="main__container__divpanel1">
                    <StatGroup>
                      <Stat className="insigths">
                        <div className="upInfo">
                          <StatLabel className="main__container__divpanel2"><TimeIcon /></StatLabel>
                          <StatLabel className="main__container__divpanel2">Vacantes Activas</StatLabel>
                        </div>
                        <div className="upInfo1">
                          <StatNumber className="main__container__divpanel3Ad">{activeOffers}</StatNumber>
                        </div>
                        <div className="upInfo3">
                          <span>Indicador vacantes</span>
                        </div>
                      </Stat>
                    </StatGroup>
                  </span>

                  <span className="main__container__divpanel1">
                    <StatGroup>
                      <Stat className="insigths">
                        <div className="upInfo">
                          <StatLabel className="main__container__divpanel2"><ExternalLinkIcon /></StatLabel>
                          <StatLabel className="main__container__divpanel2">Talentos Autopostulados</StatLabel>
                        </div>
                        <div className="upInfo1">
                          <StatNumber className="main__container__divpanel3Ad">{postulaciones}</StatNumber>
                        </div>
                        <div className="upInfo3">
                          <span>Indicador seguimiento</span>
                        </div>
                      </Stat>
                    </StatGroup>
                  </span>

                  <span className="main__container__divpanel1">
                    <StatGroup>
                      <Stat className="insigths">
                        <div className="upInfo">
                          <StatLabel className="main__container__divpanel2"><StarIcon /></StatLabel>
                          <StatLabel className="main__container__divpanel2">Empresas</StatLabel>
                        </div>
                        <div className="upInfo1">
                          <StatNumber className="main__container__divpanel3Ad">{empresas}</StatNumber>
                        </div>
                        <div className="upInfo3">
                          <span>Indicador registros</span>
                        </div>
                      </Stat>
                    </StatGroup>
                  </span>

                </div>
              </TabPanel>
              {/* ------------------------Section Tabs Empresas----------------------- */}
              <TabPanel>
                <div className="main__container__divpanel">
                  <span className="main__container__divpanel4">
                    <StatGroup>
                      <Stat>
                        <StatLabel className="main__container__divpanel5">Empresas Registradas</StatLabel>
                        <StatNumber className="main__container__divpanel6"></StatNumber>
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
                          <Td>Pendiente</ Td>
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
                          <Td isNumeric>
                            <div>
                              <button>
                                CheckIcon
                              </button>
                            </div>
                            <div>
                              <button>
                                CloseIcon
                              </button>
                            </div>
                          </Td>
                        </Tr>
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

export default DashboardHome;
