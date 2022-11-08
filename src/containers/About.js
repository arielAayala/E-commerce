import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import logo from '../assets/static/icons/hanna.png'

export default function About() {
  return (
    <>
        <Header></Header>
        <div className='text-center my-5 w-75 m-auto'>
          <h1> Acerca de nosotros </h1>
          <h6> NOS TOMAMOS MUY EN SERIO QUE TUS COMPRAS SEAN MOTIVO DE ALEGRÍA PARA VOS. 
SI AL RECIBIR ALGÚN PRODUCTO DETECTÁS ALGUNA FALLA O INCONVENIENTE CON EL MISMO, O SIMPLEMENTE NO ESTÁS SATIFESCHO, TENES VARIAS OPCIONES:
PODÉS ACERCARNOS EL PRODUCTO DIRECTAMENTE AL LOCAL, O
PODÉS DESDE TU CASA COMUNICARTE POR NUESTRAS REDES SOCIALES PARA GESTIONAR LA DEVOLUCIÓN Y EL CAMBIO. 
RECORDÁ QUE ES MUY IMPORTANTE QUE CONSERVES TUS TICKETS DE COMPRA PARA VERIFICAR LA OPERACIÓN Y PROCESAR TU RECLAMO.
TENÉS NUESTRO COMPROMISO DE QUE PONDREMOS LO MEJOR DE NOSOTROS PARA GARANTIZARTE LA MEJOR EXPERIENCIA DE COMPRA QUE ESTÉ A NUESTRO ALCANCE.
BY Ricky Shop </h6>
        <img src={logo} alt='logoFailed' style={{"width":"20rem"}}></img>
        </div>
        <Footer></Footer>
    </>
  )
}
