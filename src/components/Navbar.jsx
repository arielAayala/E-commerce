import React from 'react'

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="/"> Ricky $hop</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item ">
                        <a className="nav-link" href="/products">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/cart"> Carrito</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/info"> Acerca de </a>
                    </li>
                    
                </ul>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Navbar
