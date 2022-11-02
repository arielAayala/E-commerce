import { useContext, useEffect } from "react"
import context from "../context/context"

export default function Cart() {
    const {getCart,lstCart} = useContext(context)

    useEffect(() => {
        getCart()
        console.log("cargar cart")
        // eslint-disable-next-line
    }, []);

  

    return(
        <>
            <h2 className="w-100 text-center">Carrito🛒</h2>
            <div className="w-75 m-auto container">
                { lstCart.map(i=>{
                    return( 
                        <div key={i.id + "div"} className="row my-2 border border-dark" style={{"height":"5rem"}}>
                            <img className="col-2" src={i.photosProduct} alt={i.nameProduct} style={{"height":"4.8rem"}}></img>
                            <h3 className="col-10" key={i.id}> #{i.id} Producto: {i.nameProduct} </h3>
                        </div>
                    )

                })}
            </div>
        </>
    )
}