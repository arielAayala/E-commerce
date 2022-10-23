import { useContext } from "react"
import context from "../context/context"

export default function ButtonDelete(props) {
    
    const {deleteProduct, getProducts} = useContext(context)

    const handleDelete = async() =>{
        await deleteProduct(props.id)
        getProducts()
    }

    return(
        <button className="btn btn-danger" onClick={handleDelete} >🗑</button>
    )
};
