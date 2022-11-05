import { useContext } from "react"
import context from "../context/context"
export default function Product(props) {

    const{addToCart}=useContext(context)




    const handleAddToCart = async() =>{
        await addToCart(props.id,props.nameProduct,props.photosProduct)
        alert("Producto agregado al carrito")
        
    }

    return(
        <>
            <div key={props.id +"divCart"} className="card pb-1"  style={{"width": "18rem", "height": "27rem"}}>
                <img src={props.photosProduct} style={{"height":"17.9rem","width":"17.9rem","margin":"auto"}} className="card-img-top rounded" alt={props.nameProduct}></img>
                <div className="card-body">
                    <h5 className="card-title " style={{"fontSize":"1rem"}}>{props.nameProduct}</h5>
                    <h5 className="card-text" style={{"fontSize":"0.75rem"}}>{props.priceProduct}</h5>
                    <p className="card-text" style={{"fontSize":"0.75rem"}}>cantidad disponible: {props.quantityProduct}</p>
                    {props.quantityProduct > 0?(
                        <button className="btn btn-primary" style={{"fontSize":"0.75rem"}}  onClick={handleAddToCart} > Agregar al carrito </button>
                    ):(
                        <button className="btn btn-primary disabled" style={{"fontSize":"0.75rem"}}  onClick={handleAddToCart} > Agregar al carrito </button>
                    )}
                    
                </div>
            </div>
        </>
    )
}