import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import context from "../context/context"


export default function Navbar() {
    const{user}=useContext(context)
    const navigate=useNavigate()
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-warning">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <button className="nav-link btn" onClick={()=>{navigate("/profile")}}>Perfil</button>
                            </li>
                            <li className="nav-item ">
                                <button className="nav-link btn" onClick={()=>{navigate("/products")}}>Productos</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn " onClick={()=>{navigate("/about")}}>Acerca de</button>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" target="_blank"  href="https://github.com/arielAayala/E-commerce" rel="noreferrer">GitHub</a>
                            </li>
                            {user.uid ==="3uZ5yknYaGeuECiNV5TXQNtgAMR2"&&(
                                 <li className="nav-item">
                                 <button className="nav-link btn " onClick={()=>{navigate("/admin")}}>Admin</button>
                             </li>
                            )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


