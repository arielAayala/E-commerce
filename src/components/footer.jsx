import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
    return (
    <div>
        <footer className="text white py-4 bg-dark ">
            <div className="container">
            <nav>
                <Link to="/" className="col-12 col-md-3 d-flex aling-items-center justyfy-content-center">
                    Home
                </Link>
            </nav>
            </div>
        </footer>
    </div>
    )
}