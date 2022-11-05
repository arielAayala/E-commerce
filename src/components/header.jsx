import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import context from '../context/context'
import Navbar from "./Navbar";
import Icon from "../assets/static/icons/hanna.png"

export default function Header() {
   const {user,logOut} = useContext(context)
   const navigate = useNavigate()

   const handleLogout =async()=>{
       await logOut()
       navigate("/login")
   }
     return (
        <>
        <header className="p-3 text-bg-dark">
         <div className="container">
            <div className="d-flex flex-wrap aling-items-center justify-content-center justify-content-lg-start">
               <a href="/"><img src={Icon} href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" style={{"width":"45px"}} alt="iconFailed"></img></a>
               <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                  <li>
                     <a href="/" className="nav-link px-2 text-white"> Ricky Shop </a>
                  </li>
               </ul>
               <form className='mx-2'>
                  <input type="search" className="form-control form-control-dark text-bg-dark"
                  placeholder="Buscar productos" aria-label="Search">
                  </input>
               </form>
                     {
                        !user ? (
                            <div className="text-end">
                                <button className="btn btn-outline-light" onClick={()=>{navigate("/login")}}> Ingresar </button>
                            </div>
                        ):(
                            <div className="text-end">
                                <button className="btn btn-outline-light" onClick={handleLogout}> Salir </button>
                            </div>
                        )
                    }
            </div>
         </div>
        </header>
         <Navbar></Navbar>
        </>
     )
}