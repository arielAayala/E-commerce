import { useContext, useEffect } from "react"
import context from "../context/context"

export default function Cart() {
    const {getCart,lstCart,deleteCart,deleteAllCart} = useContext(context)

    useEffect(() => {
        getCart()
        console.log("cargar cart")
        // eslint-disable-next-line
    }, []);

  
    const handleDelete = async(id)=>{
        console.log("borrando... "+id)
        await deleteCart(id)
    }

    const handleDeleteAll = async() =>{
        await deleteAllCart()
    }

    return(
        <>
            <div className="my-5">
                <h2 className="w-100 text-center">Carrito🛒</h2>
                <div className="w-75 m-auto text-end">
                    <button className="btn btn-danger" onClick={handleDeleteAll}>Borrar Todo</button>
                </div>
                <div className="w-75 m-auto container">
                    { 
                        lstCart.map(i=>{
                        return( 
                            <div key={i.idProduct + "div"} className="row my-2 border border-dark" style={{"height":"5rem"}}>
                                <img className="col-2"  key={i.idProduct} src={i.photosProduct} alt={i.nameProduct} style={{"height":"4.8rem"}}></img>
                                <div className="col-10">
                                    <h5 className="col" key={i.idProduct}> #{i.idProduct} Producto: {i.nameProduct} Cantidad: {i.quantityProduct}</h5>
                                    <button className="btn btn-danger col" key={i.idProduct + "btn"} onClick={ ()=>handleDelete(i.idProduct)}>🗑</button>
                                </div>
                            </div>
                        )})
                    }
                </div>
            </div>
        </>
    )
}