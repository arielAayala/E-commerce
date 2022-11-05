import React from "react";
import mastercardIcon from "../assets/static/icons/mastercard_icon.png";
import mercadopagoIcon from "../assets/static/icons/mercadopago_icon.png";
import pagofacilIcon from "../assets/static/icons/pagofacil_icon.png";
import rapipagoIcon from "../assets/static/icons/rapipago_icon.png";
import icon from "../assets/static/icons/hanna.png"

export default function Footer() {
    return (
        <div className="container bg-warning">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
                <div className="col mb-auto fixed-bottom">
                    <img src={icon} href="/" alt="iconFailed" style={{"width":"55px"}}></img>
                        <p className="text-muted">© 2022 Ricky $hop</p>
                </div>
                <div class="col mb-3"></div>
                <div class="col mb-3">
                    <h5>Navegacion</h5>
                <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Inicio</a></li>
                <li class="nav-item mb-2"><a href="/products" class="nav-link p-0 text-muted">Productos</a></li>
                <li class="nav-item mb-2"><a href="/about" class="nav-link p-0 text-muted">Acerca de Nosotros</a></li>
                </ul>
                </div>
                <div class="col mb-3">
                    <h5>Medios de Pago</h5>
                <ul class="nav flex-column">
                <img src={mastercardIcon} className="my-2" alt="mastercardIconFailed" style={{"width":"45px"}}></img>
                <img src={rapipagoIcon} className="my-2" alt="rapipagoIconFailed" style={{"width":"45px"}}></img>
                <img src={pagofacilIcon} className="my-2" alt="pagofacilIconFailed" style={{"width":"45px"}}></img>
                <img src={mercadopagoIcon} className="my-2" alt="mercadopagoIconFailed" style={{"width":"45px"}}></img>
                </ul>
                </div>
                <div class="col mb-3">
                    <h5> Contactos </h5>
                <ul class="nav flex-column">
                <li class="nav-item mb-2"><a class="nav-link p-0 text-muted"> WhatsApp </a></li>
                <li class="nav-item mb-2"><a class="nav-link p-0 text-muted"> Correo y tal</a></li>
                </ul>
                </div>
            </footer>
        </div>
    )
}