import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer/Footer'
import "../style/styledHomeAdministrador.scss";
import bannerAd from "../assets/bannerAd.png";
import { useSelector } from 'react-redux';
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Button, Text } from '@chakra-ui/react'
import LayoutAdminS from '../components/layout/LayoutAdminSimple';
import imgAdmin from '../assets/icon/WhatsApp Image 2023-07-27 at 12.37.23 AM.jpeg';
// import { Progress } /from '@chakra-ui/react'





const HomeAdministrador = () => {

  const talentosEncontrados = useSelector((store) => store.userTalents);
  const { user } = useSelector((state) => state.user);
  const findTalents = talentosEncontrados.userTalents.find(talento => talento.id === user.id);
  const userStore = useSelector((store) => store.user.user);
  const navigate = useNavigate();
  console.log(findTalents);


  return (
    <div >
      {/* ---------------- Header Admin ---------------------- */}
      <LayoutAdminS />
      {/* ---------------- Banner ---------------------- */}
      <div className='admin__talents-mainB' >
        <figure>
          <img src={bannerAd} alt="" width={1000} />
        </figure>
      </div>

      {/* ---------------- Main Admin ---------------------- */}
      <main className='admin__talents-main'>

        {/* -------------Card Admin---------------------------- */}
        <div className='admin__talents-main__principal'>

          {/* -------------Lado Izquierdo Main---------------------------- */}

          <div className='grid-left__admin'>
            <div>
              <figure className="cardTalents__card-figureAd">
                <img src={imgAdmin} alt="imgTalent" />
              </figure>
              <span className="cardTalents__card-figureAd__span">Ana Ramírez</span>
            </div>
            <div className='grid-left__admin__spanp'>
              <span className='grid-left__admin__span'>Administrador</span>
            </div>
            <div className='grid-left__admin__pp'>
              <p className='grid-left__admin__p'>Aquí encontrarás las métricas  de registros de  Talentos y Vacantes Laborales.  Podrás validar a los usuarios  y editar o eliminar registros. </p>
            </div>

          </div>

          {/* -------------Lado Derecho Main---------------------------- */}

          <div className='grid-rigth__admin'>

            {/* -------------Cards Métricas Previas---------------------------- */}
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
                    <Button className='grid-rigth__admin__card1B'
                      onClick={() => navigate('/dash')}>
                      Ver detalles</Button>
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
                    <Button
                      onClick={() => navigate('/dash')}
                      className='grid-rigth__admin__card1B'>Ver detalles</Button>
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
                    <Button
                      onClick={() => navigate('/dash')}
                      className='grid-rigth__admin__card1B'>Ver detalles</Button>
                  </CardFooter>
                </Card>
              </SimpleGrid>
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  )
}

export default HomeAdministrador;