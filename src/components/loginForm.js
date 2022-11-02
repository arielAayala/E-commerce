import { useState, useContext } from 'react'
import context from "../context/context";
import { useNavigate } from "react-router-dom";
import logoGoogle from "../assets/static/google.png";

export default function LoginForm() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const { logIn, logInGoogle, resetPassword, addUser, stateUser } = useContext(context)

    const handleChange = ({ target: { value, name } }) => setUser({ ...user, [name]: value })

    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleLogIn = async (e) => {
        e.preventDefault()
        setError(" ")
        try {
            const userLogin = await logIn(user.email, user.password)
            stateUser(userLogin)
            navigate("/")
        } catch {
            setError(error.code)
            if (error.code === "auth/wrong-password") {
                setError("La contraseña es incorrecta")
            } else if (error.code === "auth/user-not-found") {
                setError("El usuario no fue encontrado")
            } else if ((error.code === "auth/invalid-email")) {
                setError("El correo electrónico no es válido")
            }
        }
    }

    const handleLogInGoogle = async (e) => {
        try {
            const userLoginGoogle = await logInGoogle()
            addUser(userLoginGoogle, null)
            navigate("/cart")
        } catch {
            setError(error)
        }
    }

    return (
        <>
            <div className='container center'>
                <form onSubmit={handleLogIn}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Correo electronico</label>
                        <input type="email" name="email" className="form-control my-2" onChange={handleChange} defaultValue="" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Ingrese su correo electronico' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="password" name="password" className="form-control my-2" onChange={handleChange} defaultValue="" id="exampleInputPassword1" placeholder='Ingrese su contraseña' />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
                <img onClick={handleLogInGoogle} alt="Google" className='m-3' width="30" height="30" src={logoGoogle} />
            </div>
            <h3 className='h3 mb-3 fw-normal'>¿Aún no tienes una cuenta? <a href={("/register")}>Únete</a></h3>
        </>
    )
}