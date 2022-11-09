import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Icon from "../assets/static/icons/hanna.png"
import RegisterForm from "../components/registerForm";
import context from "../context/context";


export default function Register() {
    const {user}=useContext(context)
    const navigate = useNavigate()

    useEffect(()=>{
        if(user){
            navigate("/login")
        }
        console.log("cargando");
        // eslint-disable-next-line
    },[user])

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
                </div>
                </div>
            </header>
            {user ? (
                <div>
                    cargando...
                </div>
            ):(
       
            <div className="my-5">
                <h1 className="text-center">Register</h1>
                <RegisterForm></RegisterForm>
            </div>
            )}
            <Footer></Footer>
        </>
    )
};
