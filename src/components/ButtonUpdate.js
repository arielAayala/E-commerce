import {useContext, useState} from "react"
import context from "../context/context"

export default function ButtonUpdate(props) {
    
    const {updateProduct,getProducts} = useContext(context)


    const [error,setError] = useState("")

    const [input,setInput] = useState({
        nameProduct:props.nameProduct,
        detailProduct:props.detailProduct,
        quantityProduct: props.quantityProduct,
        categoryProduct:props.categoryProduct,
        photosProduct:[]
    })
    
    const handleChange = ({target:{name,value}}) => {setInput({...input,[name]:value})}

    const handleUpdate = async(e) =>{
        e.preventDefault()
        try {
            if (input.nameProduct.length === 0 && input.detailProduct.length  === 0 && input.categoryProduct.length === 0 && input.quantityProduct.length ===0){
                // eslint-disable-next-line
                throw "Las casillas no puedes estar vacias"
            }else if (isNaN(parseFloat(input.quantityProduct)) || !Number.isInteger(parseFloat(input.quantityProduct))){
                // eslint-disable-next-line
                throw "Ingresar un cantidad entera"
            }
            await  updateProduct(props.id,input.nameProduct, input.detailProduct,input.photosProduct ,input.categoryProduct,input.quantityProduct)
            getProducts()
            setError("")
        } catch (error) {
            setError(error)
        }
    }


    return (
        <>
            <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target={"#modalUpdate"+props.id}>🖊</button>
            <div className="modal fade" id={"modalUpdate"+props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Actualizar Producto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="formUpdateProduct">
                                <input className="form-control mb-2" defaultValue={props.nameProduct} name="nameProduct" placeholder="Nombre del producto" onChange={handleChange} ></input>
                                <textarea className="form-control mb-2" defaultValue={props.detailProduct} name="detailProduct" placeholder="Detalle del producto" onChange={handleChange} ></textarea>
                                <input className="form-control mb-2" defaultValue={props.categoryProduct} name="categoryProduct" placeholder="Categoria del producto" onChange={handleChange} ></input>
                                <input className="form-control mb-2"  defaultValue={props.quantityProduct} name="quantityProduct" placeholder="Cantidad del producto" onChange={handleChange} ></input>
                            </form>
                            <h6>{error}</h6> 
                        </div>
                        <div className="modal-footer">
                            <button type="submit" onClick={handleUpdate} className="btn btn-primary">Actualizar</button>
                        </div>
                    </div>
                </div>
            </div>         
        </>
    )
};
