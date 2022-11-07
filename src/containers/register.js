import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
        </>
    )
};
