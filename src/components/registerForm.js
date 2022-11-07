import { useState, useContext } from 'react';
import context from "../context/context";
import EditAlert from './Alert';

export default function RegisterForm() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const { register, addUser} = useContext(context);

  const handleChange = ({ target: { value, name } }) => setUser({ ...user, [name]: value })


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user)
    try {
      const userRegister = await register(user.email, user.password)
      await addUser(userRegister)
      document.getElementById("alertRegister").classList.remove("d-none")
      // console.log(userRegister)
    } catch (error) {
      document.getElementById("alertErrorRegister").classList.remove("d-none")
    }
  }

  return (
    <>
      <EditAlert id={"alertRegister"} message={"Se ha registrado correctamente, se ha enviado una verificación a su correo"} severity={"info"}></EditAlert>
      <EditAlert id={"alertErrorRegister"} message={"Hubo un error al momento registrarse"} severity={"error"}></EditAlert>
      <div className='card container center border border-3 border-secondary'>
        <form onSubmit={handleSubmit} className="column mt-3 g-3 mb-3 p-2 needs-validation card-image-overlay" >
          <div className="mb-3">
            <label htmlFor="emailValidation" className="form-label">Correo electronico</label>
            <input autoComplete='on' type="email" name="email" className="form-control my-2" onChange={handleChange} defaultValue="" id="emailValidation" placeholder='Ingrese su correo electronico' required />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordValidation" className="form-label">Contraseña</label>
            <input autoComplete='on' type="password" name="password" className="form-control my-2" onChange={handleChange} defaultValue="" id="passwordValidation" placeholder='*********' required />
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