import { useState, useContext } from 'react'
import context from "../context/context";
import { useNavigate } from "react-router-dom";
import logoGoogle from "../assets/static/google.png";
import EditAlert from './Alert';

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
            await addUser(userLog)
            navigate("/")
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleLogInGoogle = async (e) => {
        try {
            const userLoginGoogle = await logInGoogle()
            await addUser(userLoginGoogle)
            navigate("/")
        } catch(error) {
            console.log(error.message)
        }
    }

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!user.email) document.getElementById("alertErrorReset").classList.remove("d-none")
        try {
            await resetPassword(user.email)
            document.getElementById("alertSendReset").classList.remove("d-none")
        } catch (error) {
            document.getElementById("alertErrorReset").classList.remove("d-none")
        }
    }

    return (
        <>
            <EditAlert id={"alertErrorReset"} message={"Hubo un error al resetear la contraseña, Por favor ingrese un email correcto"} severity={"error"}></EditAlert>
            <EditAlert id={"alertSendReset"} message={"Te hemos enviado un correo"} ></EditAlert>
            <div className='card col-10 mx-auto border border-2 border-dark'>
                <form onSubmit={handleLogIn} className="column mt-3 g-3 mb-1s p-2">
                    <div className="mb-3">
                        <label  className="form-label text-dark">Correo electronico</label>
                        <input autoComplete='on' type="email" name="email" className="form-control my-2" onChange={handleChange} defaultValue="" placeholder='Ingrese su correo electronico'/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label text-dark">Contraseña</label>
                        <input autoComplete='on' type="password" name="password" className="form-control my-2" onChange={handleChange} defaultValue=""  placeholder='*********' />
                    </div>
                    <div className='mb-1 mx-2'>
                        <button type="submit" className="btn btn-primary">Continuar</button>
                    </div>
                </form>
                    <div className='mb-3 mx-2'>
                        <button className="btn btn-light inline-block text-dark my-2 mx-2" onClick={handleResetPassword}>¿Olvidaste tu contraseña?</button>
                    </div>
                    <div className='mb-3 mx-3'>
                        <h6 className='text-dark'>Ingresar con <button className='btn btn-light rounded-circle' onClick={handleLogInGoogle}><img alt="Google" width="30" height="30" src={logoGoogle} /></button></h6>
                        <h6 className='text-dark'>¿Aún no tienes una cuenta? <a href={("/register")}>Únete</a></h6>
                    </div>
            </div>
        </>
    )
}