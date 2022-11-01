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
      console.log(userRegister)
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
      <div className='container center'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Correo electronico</label>
            <input type="email" name="email" className="form-control my-2" onChange={handleChange} defaultValue="" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Ingrese su correo electronico' />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Contraseña</label>
            <input type="password" name="password" className="form-control my-2" onChange={handleChange} defaultValue="" id="exampleInputPassword1" placeholder='Ingrese su contraseña' />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
      </div>
    </>
  )


}