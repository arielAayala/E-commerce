import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
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
            <Header></Header>
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
