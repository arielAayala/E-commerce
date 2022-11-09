import { useContext } from "react"
import context from "../context/context"
import EditAlert from "./Alert"


export default function AboutProducts (props)  {

  const{addCart}=useContext(context)


    const handleAddToCart = async(e) =>{
      e.preventDefault()
        try {
            await addCart(props.id,props.nameProduct,props.photosProduct,props.priceProduct) 
            document.getElementById("alertAddToCart").classList.remove("d-none")
        } catch (error) {
            document.getElementById("alertErrorAddToCart").classList.remove("d-none")
        }
        
    }

  return (
    <>
        <EditAlert id={"alertAddToCart"} message={"Se ha agregado correctamente al carrito"}></EditAlert>
        <EditAlert id={"alertErrorAddToCart"} message={"hubo un error al agregar al carrito"} severity={"error"}></EditAlert>
        <button type="button" className={props.btn || "btn btn-outline-dark mx-2"} data-bs-toggle="modal" data-bs-target={"#modal"+props.id} style={{"fontSize":"0.75rem"}}>
          {props.nameBtn || "Ver detalles"}
        </button>

        <div className="modal fade"id={"modal"+props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">{props.nameProduct}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-center">
                <img className="rounded mb-3" alt={props.nameProduct} src={props.photosProduct} style={{"height":"10rem"}}></img>
                <h6>Detalle: {props.detailProduct}</h6>
                <h6>Precio: {props.priceProduct}</h6>
                <h6>Cantidad Disponible:{props.quantityProduct}</h6>
              </div>
              <div className="modal-footer">
                  {props.quantityProduct > 0?(
                        <button className="btn btn-primary" style={{"fontSize":"0.75rem"}}  onClick={handleAddToCart} > Agregar al carrito </button>
                    ):(
                        <button className="btn btn-primary disabled" style={{"fontSize":"0.75rem"}}  onClick={handleAddToCart} > Agregar al carrito </button>
                    )}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
