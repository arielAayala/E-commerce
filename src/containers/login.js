import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/loginForm";
import context from "../context/context";



export default function Login() {
    const { user } = useContext(context)
    const navigate = useNavigate()

    useEffect(()=>{
        if(user){
            navigate("/")
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
            ) : (
                <div className="w-full">
                    <h1 className="text-center p-1 mb-0">Inicio de Sesión</h1>
                    <div className="container p-2">
                        <LoginForm></LoginForm>
                    </div>
                </div>
            )
            }

        </>
    )
}