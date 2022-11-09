import { useEffect,useContext,useState } from "react";
import context from "../context/context";
import Product from "./Product";

export default function LstProducts() {
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
            <div className='d-flex justify-content-start'>
                <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">🔎</span>
                        <input className="form-control" name='searcher' onChange={inputChange}  placeholder='Buscar'></input>
                </div>    
            </div> 
            <div className="container">
                <div className="row text-center">
                    
                {// eslint-disable-next-line
                    lstProducts.sort((a,b)=>{
                        if (a.nameProduct.toLowerCase()>b.nameProduct.toLowerCase()){
                            return 1
                        }else if(a.nameProduct.toLowerCase()<b.nameProduct.toLowerCase()){
                                return -1
                        }
                        
                    }).filter(// eslint-disable-next-line
                        (i) =>{
                    if (searcher === ""){
                        return i
                    } else if(i.nameProduct.toLowerCase().includes(searcher.toLowerCase()) || i.categoryProduct.toLowerCase().includes(searcher.toLowerCase())){
                        return i
                    }
                    }).map(i =>{
                    return (<div key={i.id + "div"} className="col my-4">
                        <Product key={i.id} id={i.id} priceProduct={i.priceProduct} quantityProduct={i.quantityProduct} nameProduct={i.nameProduct} detailProduct={i.detailProduct} photosProduct={i.photosProduct} ></Product>
                    </div>
                    )
                })}
                </div>
            </div>
        </>
    )
}