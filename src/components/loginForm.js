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

    const navigate = useNavigate()

    const handleLogIn = async (e) => {
        e.preventDefault()

        try {
            const userLog = await logIn(user.email, user.password)
            addUser(userLog)
            navigate("/")
        } catch (error) {
            alert(error.message)
        }
    }

    const handleLogInGoogle = async (e) => {
        try {
            const userLoginGoogle = await logInGoogle()
            addUser(userLoginGoogle)
            navigate("/")
        } catch(error) {
            alert(error.message)
        }
    }

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!user.email) alert("Ingrese un correo para cambiar contraseña")
        try {
            await resetPassword(user.email)
            alert("Te hemos enviado un correo")
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            <div className='container card center border border-3 border-secondary'>
                <form onSubmit={handleLogIn} className="column mt-3 g-3 mb-3 p-2 needs-validation card-image-overlay" noValidate>
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
                        <button className="btn btn-secondary inline-block border border-1 border-light bg-light text-dark" onClick={handleResetPassword}>¿Olvidaste tu contraseña?</button>
                    </div>
                    <div>
                        <h6>Ingresar con <button className='btn btn-light rounded-circle' onClick={handleLogInGoogle}><img alt="Google" width="30" height="30" src={logoGoogle} /></button></h6>
                        <h6>¿Aún no tienes una cuenta? <a href={("/register")}>Únete</a></h6>
                    </div>
                </form>
            </div>
        </>
    )
}