import React from 'react'
import LayoutTalents from '../components/layout/LayoutTalents'
import { NavLink } from 'react-router-dom'
import { LayoutGroup } from 'framer-motion'
import LayoutAdminS from '../components/layout/LayoutAdminSimple'
import Footer from '../components/footer/Footer'
import "../style/styledHomeAdministrador.scss";
import bannerAd from "../assets/bannerAd.png";
import { useSelector } from 'react-redux';
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Button, Text, Stack } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'





const HomeAdministrador = () => {

  const talentosEncontrados = useSelector((store) => store.userTalents);
  const { user } = useSelector((state) => state.user);
  const findTalents = talentosEncontrados.userTalents.find(talento => talento.id === user.id);
  const userStore = useSelector((store) => store.user.user);


  return (
    <div >
      <LayoutAdminS />



      <div className='admin__talents-mainB' >
        <figure>
          <img src={bannerAd} alt="" width={1000} />
        </figure>
      </div>



      <main className='admin__talents-main'>


        {/* -------------Card Admin---------------------------- */}
        <div className='admin__talents-main__principal'>

          <div className='grid-left__admin'>
            <div>
              <figure className="cardTalents__card-figureAd">
                <img src={userStore ? userStore.phothoURL : ""} alt="imgTalent" />
              </figure>
              {/* <span>{userStore?userStore.firstName:""}</span> */}
              <span className="cardTalents__card-figureAd__span">Cleopatra Pérez</span>
            </div>


            <div className='grid-left__admin__spanp'>
              <span className='grid-left__admin__span'>Administrador</span>
            </div>

            <div className='grid-left__admin__pp'>
              <p className='grid-left__admin__p'>En éste espacio encontrarás las métricas <br /> de registros de <br /> Talentos y Vacantes Laborales. <br /> Podrás validar a los usuarios <br /> y editar o eliminar registros. </p>
            </div>

          </div>



          <div className='grid-rigth__admin'>

            <div className='grid-rigth__admin__card1'>

              <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' >
                <Card>
                  <CardHeader>
                    <Heading size='md'> Vacantes Registradas</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text className='grid-rigth__admin__card1T'>Indicador de registro por el Amdinitsrador</Text>


                  </CardBody>
                  <CardFooter>
                    <Button className='grid-rigth__admin__card1B'>Ver detalles</Button>
                  </CardFooter>
                </Card>

              </SimpleGrid>

            </div>

            <div className='grid-rigth__admin__card1'>

              <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' >
                <Card>
                  <CardHeader>
                    <Heading size='md'> Talentos Autopostulados</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text className='grid-rigth__admin__card1T'>Indicador de Talentos que aplican de forma autónoma</Text>


                  </CardBody>
                  <CardFooter>
                    <Button className='grid-rigth__admin__card1B'>Ver detalles</Button>
                  </CardFooter>
                </Card>

              </SimpleGrid>

            </div>

            <div className='grid-rigth__admin__card1'>

              <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' >
                <Card>
                  <CardHeader>
                    <Heading size='md'>Talentos Registrados</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text className='grid-rigth__admin__card1T'>Indicador de Talentos con perfiles Validados</Text>


                  </CardBody>
                  <CardFooter>
                    <Button className='grid-rigth__admin__card1B'>Ver detalles</Button>
                  </CardFooter>
                </Card>

              </SimpleGrid>

            </div>





          </div>

        </div>



        {/* <ul className="admin__talentsU" >

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


        </ul> */}



      </main>


      <Footer />
    </div>

  )
}

export default HomeAdministrador;