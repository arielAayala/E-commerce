import { useState, useContext } from 'react'
import context from "../context/context";
import { useNavigate } from "react-router-dom";
import logoGoogle from "../assets/static/google.png";

export default function LoginForm() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const { logIn, logInGoogle, resetPassword, addUser } = useContext(context)

    const handleChange = ({ target: { value, name } }) => setUser({ ...user, [name]: value })

    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleLogIn = async (e) => {
        e.preventDefault()
        setError("");
        try {
            await logIn(user.email, user.password)
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
            navigate("/")
        } catch {
            setError(error)
        }
    }

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!user.email) return setError("Ingrese un correo para cambiar contraseña")
        try {
            await resetPassword(user.email)
            setError("Te hemos enviado un correo")
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <div className='container card center border border-3 border-secondary'>
                {/* {error && <Alert message={error} />} */}
                <form onSubmit={handleLogIn} className="column mt-3 g-3 mb-3 p-2 needs-validation card-image-overlay">
                    <div className="mb-3">
                        <label htmlFor="emailValidation" className="form-label">Correo electronico</label>
                        <input type="email" name="email" className="form-control my-2" onChange={handleChange} defaultValue="" id="emailValidation" placeholder='Ingrese su correo electronico' required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordValidation" className="form-label">Contraseña</label>
                        <input type="password" name="password" className="form-control my-2" onChange={handleChange} defaultValue="" id="passwordValidation" placeholder='*********' required />
                    </div>
                    <div className='justify-between'>
                        <button type="submit" className="btn btn-primary">Continuar</button>
                        <a href="#!" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" onClick={handleResetPassword}>¿Olvidaste tu contraseña?</a>
                    </div>
                    <h6>Ingresar con <img onClick={handleLogInGoogle} alt="Google" className='m-3 border' width="30" height="30" src={logoGoogle} /></h6>
                    <h6>¿Aún no tienes una cuenta? <a href={("/register")}>Únete</a></h6>
                </form>
            </div>
        </>
    )
}