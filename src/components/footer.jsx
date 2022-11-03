import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <footer className="text white py-4 bg-primary fixed-bottom">
                <div className="container">
                    <nav className="row text-bg-primary ">
                        Navegar
                    </nav>
                    <nav className="row">
                        <a href="/" className="link-light">Home</a>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <a href="/login" className="link-light">Login</a>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    )
}