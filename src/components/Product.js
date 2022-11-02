import { useContext } from "react"
import {useNavigate} from "react-router-dom"
import context from "../context/context"
export default function Product(props) {

    const{addToCart}=useContext(context)

    const navigate = useNavigate()


    const handleAddToCart = async() =>{
        navigate("/cart")
        await addToCart(props.id,props.nameProduct,props.photosProduct)
    }

    return(
        <>
            <div className="card"  style={{"width": "18rem", "height": "27rem"}}>
                <img src={props.photosProduct} style={{"height":"17.9rem","width":"17.9rem","margin":"auto"}} className="card-img-top " alt={props.nameProduct}></img>
                <div className="card-body">
                    <h5 className="card-title" style={{"fontSize":"1.25rem"}}>{props.nameProduct}</h5>
                    <p className="card-text" style={{"fontSize":"0.75rem"}}>cantidad disponible: {props.quantityProduct}</p>
                    <button className="btn btn-primary" onClick={handleAddToCart} > Agregar al carrito </button>
                </div>
            </div>
        </>
    )
}