import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/static/logo.png"
export default function Footer (){
    return (
    <div>
        <footer className="text white py-4 bg-dark ">
            <div className="container">
            <nav>
                <Link to="../containers/home" className="col-12 col-md-3 d-flex aling-items-center justyfy-content-center">
                    Home
                </Link>
            </nav>
            </div>
        </footer>
    </div>
    )
}