
export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-warning ">
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item ">
                        <a className="nav-link" href="/products">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/cart">Carrito</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about"> Acerca de </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/arielAayala/E-commerce"> Proyecto  </a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </>
  )
}


