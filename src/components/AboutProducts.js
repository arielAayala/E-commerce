

export default function AboutProducts (props)  {
  return (
    <>
        <button type="button" className="btn btn-outline-dark mx-2" data-bs-toggle="modal" data-bs-target={"#modal"+props.id} style={{"fontSize":"0.75rem"}}>
          Ver detalles
        </button>

        <div className="modal fade" id={"modal"+props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">{props.nameProduct}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-center">
                <img alt={props.nameProduct} src={props.photosProduct} style={{"height":"10rem"}}></img>
                <h6>Detalle: {props.detailProduct}</h6>
                <h6>Precio: {props.priceProduct}</h6>
                <h6>Cantidad Disponible:{props.quantityProduct}</h6>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
