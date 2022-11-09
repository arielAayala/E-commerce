import { useContext, useEffect, useState } from "react"
import context from "../context/context"
import AboutProducts from "./AboutProducts"


export default function SearchBar() {
    const {lstProducts=[],getProducts} = useContext(context)

    const [searcher,setSearcher] = useState("")

    const inputChange = (e) => setSearcher(e.target.value)


    useEffect(() => {
        getProducts()
        console.log("cargar");
    }, [])

    return(
        <>
           <div className='mx-2'>
                     <input type="search" className="form-control form-control-dark text-bg-dark"
                        placeholder="Buscar productos" defaultValue={searcher} aria-label="Search" style={{"width":"15rem"}} onChange={inputChange}>
                     </input>
                     <ul className="list-group position-absolute " style={{"width":"15rem","zIndex":"1051"}}>
                        {    
                        // eslint-disable-next-line array-callback-return
                        lstProducts.filter(i=>{
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
                                    <AboutProducts funcion={true} btn={"btn w-100"} nameBtn={i.nameProduct} key={i.id} id={i.id} nameProduct={i.nameProduct} detailProduct={i.detailProduct} priceProduct={i.priceProduct} quantityProduct={i.quantityProduct} photosProduct={i.photosProduct}></AboutProducts>
                                </li>
                            )
                        })
                        }
                    </ul>
            </div>  
        </>
    )
}