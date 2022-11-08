import {useContext, useState} from "react"
import context from "../context/context"
import EditAlert from "./Alert"

export default function ButtonAgregar() {
    
    const {addProduct,getProducts} = useContext(context)



    const [input,setInput] = useState({
        nameProduct:"",
        detailProduct:"",
        quantityProduct: "",
        categoryProduct:"",
        photosProduct:"",
        priceProduct:""
    })
    
    const handleChange = ({target:{name,value}}) => {setInput({...input,[name]:value})}

    const handleAdd = async(e) =>{
        e.preventDefault()
        try {
            if (input.nameProduct=== "" || input.detailProduct === "" || input.categoryProduct=== "" || input.quantityProduct==="" || input.photosProduct==="" || input.priceProduct === ""){
                // eslint-disable-next-line
                throw "Las casillas no puedes estar vacias"
            }else if (isNaN(parseFloat(input.quantityProduct)) || !Number.isInteger(parseFloat(input.quantityProduct))){
                // eslint-disable-next-line
                throw "Ingresar una cantidad entera correspondiente"
            }else if(isNaN(parseFloat(input.priceProduct)) || typeof input.priceProduct=== "number" ){
                // eslint-disable-next-line
                throw  "Ingrese un precio correspondiente"
            }
            await  addProduct(input.nameProduct, input.detailProduct,input.photosProduct ,input.categoryProduct,input.quantityProduct,input.priceProduct)
            getProducts()
            document.getElementById("formAddProduct").reset()
            document.getElementById("alertAdd").classList.remove("d-none")
        } catch (error) {
            console.log(error)
            document.getElementById("alertErrorAdd").classList.remove("d-none")
        }
    }

    return (
        <>
            <EditAlert id={"alertErrorAdd"} message={"Hubo un error al agregar el producto"} severity={"error"}></EditAlert>
            <EditAlert id={"alertAdd"} message={"Se ha agregado el producto existosamente"} ></EditAlert>
            <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modalAdd">➕</button>
            <div className="modal fade" id="modalAdd" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar Producto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="formAddProduct" onSubmit={handleAdd}>
                                <input className="form-control mb-2" name="nameProduct" placeholder="Nombre del producto" onChange={handleChange} ></input>
                                <textarea className="form-control mb-2" name="detailProduct" placeholder="Detalle del producto" onChange={handleChange} ></textarea>
                                <input className="form-control mb-2" name="categoryProduct" placeholder="Categoria del producto" onChange={handleChange} ></input>
                                <input className="form-control mb-2" name="quantityProduct" placeholder="Cantidad del producto" onChange={handleChange} ></input>
                                <input className="form-control mb-2" name="priceProduct" placeholder="Precio del producto" onChange={handleChange} ></input>
                                <input className="form-control mb-2" name="photosProduct" placeholder="Fotos del producto" onChange={handleChange} ></input>
                                <button type="submit" className="btn btn-primary"> Agregar </button>
                            </form>
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>         
        </>
    )
};
