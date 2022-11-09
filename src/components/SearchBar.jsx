import { useContext, useEffect, useState } from "react"
import context from "../context/context"
import AboutProducts from "./AboutProducts"


export default function SearchBar() {
    const {lstProducts,getProducts} = useContext(context)

    const [searcher,setSearcher] = useState("")

    const inputChange = (e) => setSearcher(e.target.value)


    useEffect(() => {
      getProducts()
      console.log("cargar listado de products");
        // eslint-disable-next-line
    }, [])

    return(
        <>
           <form className='mx-2'>
                     <input type="search" className="form-control form-control-dark text-bg-dark"
                        placeholder="Buscar productos" aria-label="Search" style={{"width":"15rem"}} onChange={inputChange}>
                     </input>
                     <ul className="list-group position-absolute " style={{"width":"15rem","zIndex":""}}>
                        {lstProducts.filter(i=>{
                            if (searcher === ""){
                                return null
                            }else {
                                if(i.nameProduct.toLowerCase().includes(searcher.toLowerCase())){
                                    return i
                                } 
                            }
                        }).map(i=>{
                            return(
                                <li key={i.nameProduct+ "div"}  className="list-group-item " >
                                    <AboutProducts nameBtn={i.nameProduct} key={i.id} id={i.id} nameProduct={i.nameProduct} detailProduct={i.detailProduct} priceProduct={i.priceProduct} quantityProduct={i.quantityProduct} photosProduct={i.photosProduct}></AboutProducts>
                                </li>
                            )
                        })}
                    </ul>
            </form>  
        </>
    )
}