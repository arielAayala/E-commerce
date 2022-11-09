import { useContext, useEffect, useState } from "react"
import context from "../context/context"
import EditAlert from "../components/Alert"
import Footer from "../components/footer"
import { useNavigate } from "react-router-dom";
import Header from "../components/header"

export default function Cart() {
    const {getCart,lstCart,deleteCart,deleteAllCart,confirmCart,calculatePay,user,} = useContext(context)

    const [totalPay,setTotalPay]=useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        if(!user){
            navigate("/login")
        }
        getCart()
        loadPay()

    // eslint-disable-next-line 
    }, []);

    const loadPay = async()=>{
        setTotalPay(await calculatePay())
    }
  
    const handleDelete = async(id)=>{
        try {
            await deleteCart(id)
            getCart()
            await loadPay()
            document.getElementById("alertDelete").classList.remove("d-none")
        } catch (error) {
            alert (error)
        }
    }

    const handleDeleteAll = async() =>{
        try {
            await deleteAllCart()
            getCart()
            await loadPay()
            document.getElementById("alertDeleteAll").classList.remove("d-none")
        } catch (error) {
            alert(error)
        }
    }


    const handleConfirmCart= async()=>{
        try {
            await confirmCart(totalPay)
            getCart()
            await loadPay()
            document.getElementById("alertConfirmBuy").classList.remove("d-none")
        } catch (error) {
            alert(error)
        }
    }


    return(
        <>
           
           <EditAlert id={"alertDeleteAll"} message={"Se han borrado todos los productos del carrito!"}></EditAlert>
           <EditAlert id={"alertDelete"} message={"Se ha borrado el producto del carrito"}></EditAlert>
           <EditAlert id={"alertConfirmBuy"} message={"Se ha realizado la compra correctamente"}></EditAlert>
           <Header></Header>
            <div className="my-5  py-2" style={{"backgroundColor":"#E1E1E1"}}>
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
                                <div key={i.idProduct + "div"} className="row my-2 border border-dark bg-white rounded" style={{"height":"5rem"}}>
                                    <img className="col-1 my-auto"  key={i.idProduct} src={i.photosProduct} alt={i.nameProduct} style={{"height":"4.8rem"}}></img>
                                    <div className="col-8 my-auto" >
                                        <h5 className="col" style={{"fontSize":"1.1rem"}} key={i.idProduct}> #{i.idProduct} Producto: {i.nameProduct} Precio: {i.priceProduct} Cantidad: {i.quantityProduct}</h5>
                                    </div>
                                    <div className="col-2 my-auto">
                                        <button className="btn btn-danger col" style={{"fontSize":"0.75rem"}} key={i.idProduct + "btn"} onClick={ ()=>handleDelete(i.idProduct)}>🗑</button>
                                    </div>
                                </div>
                            )})
                        
                    ):(
                        <div className="w-75 m-auto my-5 container justify-content-center">
                            <h3 className="text-center">Agregue algun producto al carrito..</h3>

                        </div>
                    )
                    }    
                </div>
                {lstCart.length > 0 ?(
                    <div className="w-75 m-auto text-end">
                        <h5 >Total a pagar: ${totalPay} </h5>
                        <button className="btn btn-danger" onClick={handleConfirmCart}>Confirmar Compra</button>
                    </div>
                ):(
                    <div className="w-75 m-auto text-end my-5">
                        <button className="btn btn-danger disabled" onClick={handleConfirmCart}>Confirmar Compra</button>
                    </div>
                )}
            </div>
            <Footer></Footer>
        </>
    )
}