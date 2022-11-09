import { useContext, useEffect } from "react";
import Carrousel from "../components/carrousel";
import Footer from "../components/footer";
import Header from "../components/header";
import Product from "../components/Product";
import context from "../context/context";

export default function Home() {

    const {getProducts,lstProducts}=useContext(context)

    useEffect(()=>{
        getProducts()
        console.log("xd");
        // eslint-disable-next-line
    },[])

    return(
        <>
            <Header></Header>
            <div className="w-100 m-auto my-5">
                <Carrousel  autoPlay={true}></Carrousel>
            </div> 
            <div className="container m-auto text-center w-75 my-5">
                <h3>Productos Destacados</h3>
            <div className="row">
                {lstProducts.sort((a,b)=>{
                    if (parseInt(a) > parseInt(b)){
                        return -1
                    }else{
                        return 1
                    }
                }).map((i,index)=>{
                    if (index < 6){
                        return (<div key={i.id + "div"} className="col my-4">
                            <Product key={i.id} id={i.id} priceProduct={i.priceProduct} quantityProduct={i.quantityProduct} nameProduct={i.nameProduct} detailProduct={i.detailProduct} photosProduct={i.photosProduct} ></Product>
                    </div>
                    )
                    }else{
                        return null
                    }
                
                })
                }
            </div>
            </div>
            
           
            <Footer></Footer>
        </>
    )
};
