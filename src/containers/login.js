import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/loginForm";
import context from "../context/context";



export default function Login() {
    const { user } = useContext(context)
    const navigate = useNavigate()

    return (
        <>
            {user ? (
                navigate("/")
            ) : (
                <div className="w-full">
                    <h1 className="text-center p-1 mb-0">Inicio de Sesión</h1>
                    <div className="container mx-auto p-2">
                        <LoginForm></LoginForm>
                    </div>
                </div>
            )
            }

        </>
    )
}