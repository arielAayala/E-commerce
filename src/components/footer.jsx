import React from "react";
import mastercardIcon from "../assets/static/icons/mastercard_icon.png";
import mercadopagoIcon from "../assets/static/icons/mercadopago_icon.png";
import pagofacilIcon from "../assets/static/icons/pagofacil_icon.png";
import rapipagoIcon from "../assets/static/icons/rapipago_icon.png";
import icon from "../assets/static/icons/hanna.png"
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate =useNavigate()

    return (
        <>
            <div className="bg-warning w-100 container-fluid">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
                <div className="col mb-auto fixed-bottom">
                    <img src={icon} href="/" alt="iconFailed" style={{"width":"55px"}}></img>
                        <p className="text-muted">© 2022 Ricky $hop</p>
                </div>
                <div className="col mb-3"></div>
                <div className="col mb-3">
                    <h5>Navegacion</h5>
                <ul className="nav flex-column">
                <li className="nav-item mb-2"><button onClick={()=>navigate("/")} className="nav-link p-0 text-muted btn">Inicio</button></li>
                <li className="nav-item mb-2"><button onClick={()=>navigate("/products")} className="nav-link p-0 text-muted btn">Productos</button></li>
                <li className="nav-item mb-2"><button onClick={()=>navigate("/about")} className="nav-link p-0 text-muted btn">Acerca de Nosotros</button></li>
                </ul>
                </div>
                <div className="col mb-3">
                    <h5>Medios de Pago</h5>
                <ul className="nav flex-column">
                <img src={mastercardIcon} className="my-2" alt="mastercardIconFailed" style={{"width":"45px"}}></img>
                <img src={rapipagoIcon} className="my-2" alt="rapipagoIconFailed" style={{"width":"45px"}}></img>
                <img src={pagofacilIcon} className="my-2" alt="pagofacilIconFailed" style={{"width":"45px"}}></img>
                <img src={mercadopagoIcon} className="my-2" alt="mercadopagoIconFailed" style={{"width":"45px"}}></img>
                </ul>
                </div>
                <div className="col mb-3">
                    <h5> Contactos </h5>
                <ul className="nav flex-column">
                <li className="nav-item mb-2"><a target="_blank" rel="noreferrer" href="https://web.whatsapp.com/" className="nav-link p-0 text-muted"> WhatsApp </a></li>
                <li className="nav-item mb-2"><a  target="_blank" rel="noreferrer" href="https://outlook.live.com/" className="nav-link p-0 text-muted"> Correo </a></li>
                </ul>
                </div>
            </footer>
        </div>
        </>  
    )
}