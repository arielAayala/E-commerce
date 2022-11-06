import { useState, useContext } from 'react';
import context from "../context/context";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const { register, addUser } = useContext(context);

  const handleChange = ({ target: { value, name } }) => setUser({ ...user, [name]: value })

  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    // console.log(user)
    try {
      const userRegister = await register(user.email, user.password)
      addUser(userRegister)
      navigate("/")
      // console.log(userRegister)
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("El correo ya esta registrado")
      } else if (error.code === "auth/weak-password") {
        setError("La contraseña debe tener minimo 6 caracteres")
      } else if (error.code === "auth/invalid-email") {
        setError("El email no es valido")
      }
      // console.log(error)
    }
  }

  return (
    <>
      <div className='card container center border border-3 border-secondary'>
        <form onSubmit={handleSubmit} className="column mt-3 g-3 mb-3 p-2 needs-validation card-image-overlay" >
          <div className="mb-3">
            <label htmlFor="emailValidation" className="form-label">Correo electronico</label>
            <input type="email" name="email" className="form-control my-2" onChange={handleChange} defaultValue="" id="emailValidation" placeholder='Ingrese su correo electronico' required />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordValidation" className="form-label">Contraseña</label>
            <input type="password" name="password" className="form-control my-2" onChange={handleChange} defaultValue="" id="passwordValidation" placeholder='*********' required />
          </div>
          <div className="mb-3">
            <div className='form-check'>
              <input type="checkbox" className="form-check-input" id="terms" required />
              <label className="form-check-label" htmlFor="terms">Acepto los términos y condiciones</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Continuar</button>
        </form>
      </div>
    </>
  )


}