import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import context from '../context/context'
import Navbar from "./Navbar";
import Icon from "../assets/static/icons/hanna.png"
import ButtonCart from './buttonCart';
import SearchBar from './SearchBar';

export default function Header() {
   const { user, logOut } = useContext(context)
   const navigate = useNavigate()



   const handleLogout = async () => {
      await logOut()
      navigate("/login")
   }




   return (
      <>
         <header className="p-3 text-bg-dark">
            <div className="container">
               <div className="d-flex flex-wrap aling-items-center justify-content-center justify-content-lg-start">
                  <a href="/"><img src={Icon} href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" style={{ "width": "45px" }} alt="iconFailed"></img></a>
                  <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                     <li>
                        <a href="/" className="nav-link px-2 text-white"> Ricky Shop </a>
                     </li>
                  </ul>
                  <SearchBar></SearchBar>
                  {
                     !user ? (
                        <>
                        <div className="text-end">
                           <button className="btn btn-outline-light" onClick={() => { navigate("/login") }}> Ingresar </button>
                        </div>
                           <div className="text-end mx-2">
                              <button className="btn btn-outline-light" aria-current="page" onClick={()=>{navigate("/cart")}}> Carrito <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                 <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /></svg>
                              </button>
                           </div>
                        </>
                        
                     ) : (
                        <>
                        <div className="text-end">
                           <button className="btn btn-outline-light" onClick={handleLogout}> Salir  </button>
                        </div>
                        <ButtonCart></ButtonCart>
                        </>
                        
                     )
                  }

                  
               </div>
            </div>
         </header>
         <Navbar></Navbar>
      </>
   )
}