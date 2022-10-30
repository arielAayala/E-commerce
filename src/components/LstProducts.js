import { useEffect } from "react";
import { useContext } from "react";
import context from "../context/context";
import Product from "./Product";

export default function LstProducts() {
    const {lstProducts,getProducts} = useContext(context)


    useEffect(() => {
      getProducts()
      console.log("cargar listado de products");
        // eslint-disable-next-line
    }, [])
    

    return(
        <>
            <div className="grid text-center">
                {lstProducts.map(i =>{
                    return (<div key={i.id + "div"} className="">
                        <Product key={i.id} id={i.id} nameProduct={i.nameProduct} detailProduct={i.detailProduct} photosProduct={i.photosProduct} ></Product>
                    </div>
                    )
                })}
            </div>
        </>
    )

}