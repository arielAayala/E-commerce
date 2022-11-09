import { useContext } from "react"
import context from "../context/context"
import AboutProducts from "./AboutProducts"
import EditAlert from "./Alert"
export default function Product(props) {

    const{addCart}=useContext(context)




    const handleAddToCart = async() =>{
        try {  
            await addCart(props.id,props.nameProduct,props.photosProduct,props.priceProduct)
            document.getElementById("alertAddToCart").classList.remove("d-none")
        } catch (error) {
            document.getElementById("alertErrorAddToCart").classList.remove("d-none")
        }
        
    }

    return(
        <>
            <EditAlert id={"alertAddToCart"} message={"Se ha agregado correctamente al carrito"}></EditAlert>
            <EditAlert id={"alertErrorAddToCart"} message={"hubo un error al agregar al carrito"} severity={"error"}></EditAlert>
            <div key={props.id +"divCart"} className="card pb-1"  style={{"width": "19rem", "height": "29rem"}}>
                <img src={props.photosProduct} style={{"height":"18.9rem","width":"17.9rem","margin":"auto"}} className="card-img-top rounded" alt={props.nameProduct}></img>
                <div className="card-body py-1">
                    <h5 className="card-title " style={{"fontSize":"1rem"}}>{props.nameProduct}</h5>
                    <h5 className="card-text" style={{"fontSize":"0.75rem"}}>${props.priceProduct}</h5>
                    <p className="card-text" style={{"fontSize":"0.75rem"}}>Cantidad disponible: {props.quantityProduct}</p>
                    {props.quantityProduct > 0?(
                        <button className="btn btn-primary" style={{"fontSize":"0.75rem"}}  onClick={handleAddToCart} > Agregar al carrito </button>
                    ):(
                        <button className="btn btn-primary disabled" style={{"fontSize":"0.75rem"}}  onClick={handleAddToCart} > Agregar al carrito </button>
                    )}
                <AboutProducts funcion={false} key={props.id} id={props.id} nameProduct={props.nameProduct} detailProduct={props.detailProduct} priceProduct={props.priceProduct} quantityProduct={props.quantityProduct} photosProduct={props.photosProduct}></AboutProducts>
                </div>
            </div>
        </>
    )
}