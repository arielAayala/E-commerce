import { useContext } from "react"
import context from "../context/context"
import EditAlert from "./Alert"
export default function ButtonDelete(props) {
    
    const {deleteProduct, getProducts} = useContext(context)

    const handleDelete = async() =>{
        try {
            await deleteProduct(props.id)
            getProducts()
            document.getElementById("alertDelete").classList.remove("d-none")
        } catch (error) {
            document.getElementById("alertErrorDelete").classList.remove("d-none")
        }

    }

    return(
        <>
            <EditAlert id={"alertErrorDelete"} message={"Hubo un error al eliminar el producto"} severity={"error"}></EditAlert>
            <EditAlert id={"alertDelete"} message={"Se ha eliminado el producto corectamente"} ></EditAlert>
            <button className="btn btn-danger" onClick={handleDelete} >🗑</button>
        </>
        
    )
};
