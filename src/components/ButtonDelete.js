import { useContext } from "react"
import context from "../context/context"

export default function ButtonDelete(props) {
    
    const {deleteProduct, getProducts} = useContext(context)

    const handleDelete = async() =>{
        try {
            await deleteProduct(props.id)
            getProducts()
            alert("Producto eliminado exitosamente")
        } catch (error) {
            console.log(error)
            alert(error)
        }

    }

    return(
        <button className="btn btn-danger" onClick={handleDelete} >🗑</button>
    )
};
