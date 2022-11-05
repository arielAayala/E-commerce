import { useContext, useEffect } from "react"
import context from "../context/context"

export default function Cart() {
    const {getCart,lstCart,deleteCart,deleteAllCart,confirmCart} = useContext(context)

    useEffect(() => {
        getCart()
        console.log("cargar cart")
        // eslint-disable-next-line
    }, []);

  
    const handleDelete = async(id)=>{
        try {
            await deleteCart(id)
        } catch (error) {
            alert (error)
        }
    }

    const handleDeleteAll = async() =>{
        try {
            await deleteAllCart()
        } catch (error) {
            alert(error)
        }
    }

    const handleConfirmCart= async()=>{
        try {
            await confirmCart()
        } catch (error) {
            alert(error)
        }
    }

    return(
        <>
            <div className="my-5  py-2">
                <h2 className="w-100 text-center bg-secondary rounded-pill">Carrito🛒</h2>
                {lstCart.length > 0 ?(
                    <div className="w-75 m-auto text-end my-5">
                    <button className="btn btn-danger" onClick={handleDeleteAll}>Borrar Todo</button>
                    </div>
                ):(
                    <div className="w-75 m-auto text-end my-5">
                    <button className="btn btn-danger disabled" onClick={handleDeleteAll}>Borrar Todo</button>
                    </div>
                )

                }
                
                <div className="w-75 m-auto container my-5">
                    {   lstCart.length > 0 ? (
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
                        
                    ):(
                        <div className="w-75 m-auto my-5 container justify-content-center">
                            <h3 className="text-center">Agregue algun producto al carrito</h3>
                            <img className="w-100 rounded  " alt="carrito vacio" src="https://img.europapress.es/fotoweb/fotonoticia_20220704104046_1200.jpg"></img>
                        </div>
                    )
                    }    
                </div>
                {lstCart.length > 0 ?(
                    <div className="w-75 m-auto text-end">
                        <button className="btn btn-danger" onClick={handleConfirmCart}>Confirmar Compra</button>
                    </div>
                ):(
                    <div className="w-75 m-auto text-end my-5">
                        <button className="btn btn-danger disabled" onClick={handleConfirmCart}>Confirmar Compra</button>
                    </div>
                )}
            </div>
        </>
    )
}