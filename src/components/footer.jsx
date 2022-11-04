import React from "react";

export default function Footer() {
    return (
        <div>
            <footer className="text white py-4 bg-warning sticky-bottom">
                <div className="container">
                    <nav className="row  ">
                        Navegar
                    </nav>
                    <nav className="row">
                        <a href="/" className="link-dark">Home</a>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <a href="/login" className="link-dark">Login</a>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    )
}