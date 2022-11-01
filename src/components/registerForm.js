import { useState, useContext } from 'react';
import context from "../context/context";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const { register } = useContext(context);

  const handleChange = ({ target: { value, name } }) => setUser({ ...user, [name]: value })

  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await register(user.email, user.password)
      // navigate("/")
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <div className='container-sm center'>
        <form>
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
          <button type="submit" class="btn btn-primary">Guardar</button>
        </form>
      </div>
    </>
  )


}