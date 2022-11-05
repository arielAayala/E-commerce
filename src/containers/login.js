import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/loginForm";
import context from "../context/context";



export default function Login() {
    const {user} = useContext(context)
    const navigate = useNavigate()

    return (
        <>
            {user ? (
                navigate("/")
            ):(
                <div className="w-full max-w-xs m-auto my-5">
                <h1 className="border border-4 text-center p-1 mb-0">Inicio de Sesión</h1>
                <div className="">
                    <LoginForm></LoginForm>
                </div>
            </div>
            )
        }
            
        </>
    )
}