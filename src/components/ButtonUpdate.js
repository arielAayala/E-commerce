import {useContext, useState} from "react"
import context from "../context/context"
import EditAlert from "./Alert"

export default function ButtonUpdate(props) {
    
    const {updateProduct,getProducts} = useContext(context)



    const [input,setInput] = useState({
        nameProduct:props.nameProduct,
        detailProduct:props.detailProduct,
        quantityProduct: props.quantityProduct,
        categoryProduct:props.categoryProduct,
        photosProduct:props.photosProduct,
        priceProduct:props.priceProduct
    })
    
    const handleChange = ({target:{name,value}}) => {setInput({...input,[name]:value})}

    const handleUpdate = async(e) =>{
        e.preventDefault()
        try {
            if ((input.nameProduct) === "" || input.priceProduct==="" || input.detailProduct  === "" || input.categoryProduct === "" || input.quantityProduct ===""  || input.photosProduct === ""){
                // eslint-disable-next-line
                throw "Las casillas no puedes estar vacias"
            }else if (isNaN(parseFloat(input.quantityProduct)) || !Number.isInteger(parseFloat(input.quantityProduct))){
                // eslint-disable-next-line
                throw "Ingresar un cantidad entera"
            }else if (isNaN(parseFloat(input.priceProduct)) || typeof input.priceProduct=== "number" ){
                // eslint-disable-next-line
                throw "Ingrese un precio correspondiente"
            }
            await  updateProduct(props.id,input.nameProduct, input.detailProduct,input.photosProduct ,input.categoryProduct,input.quantityProduct,input.priceProduct)
            getProducts()
            document.getElementById("alertUpdate").classList.remove("d-none")
        } catch (error) {
            document.getElementById("alertErrorUpdate").classList.remove("d-none")
        }
    }


    return (
        <>
            <EditAlert id={"alertErrorUpdate"} message={"Hubo un error al actualizar el producto"} severity={"error"}></EditAlert>
            <EditAlert id={"alertUpdate"} message={"Se ha actualizado el producto correctamente"} ></EditAlert>
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
                                <input className="form-control mb-2"  defaultValue={props.priceProduct} name="priceProduct" placeholder="Precio del producto" onChange={handleChange} ></input>
                                <input className="form-control mb-2"  defaultValue={props.photosProduct} name="photosProduct" placeholder="Fotos del producto" onChange={handleChange} ></input>
                            </form>
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
