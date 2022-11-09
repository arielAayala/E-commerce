import ContextProducts from "./context"
import { db } from "../services/firebase"
import { useState,useContext } from "react"
import { setDoc,updateDoc,doc,collection,getDocs, deleteDoc } from "firebase/firestore"
import context from "./context"



export default function ProductsProvider(props) {

    const {addCart,user,logOut,getUser,cart,loadCart} =useContext(context)

    const {children} = props

    const [products, setProducts] = useState([]);

    const incrementalCount = async() =>{
        let count = -1
        const snap = await getDocs(collection(db,"products"))
        snap.forEach((i)=>{
            if ( count < parseInt(i.id)){
                count = parseInt(i.id)
            }
        })
        return count + 1
    }

    const getProducts = async()=>{
        const lstProducts = []
        const snap = await getDocs(collection(db,"products"))
        snap.forEach((i)=>{
            lstProducts.push({    
                id:i.id,
                ...i.data()
                }
            )
        })
        setProducts(lstProducts)
    }

    const addProduct = async(name,detail,photos,category,quantity,price) => {
        await setDoc(doc(db,"products", (await incrementalCount()).toString()),{
            nameProduct: name,
            detailProduct:detail,
            photosProduct:photos,
            categoryProduct:category,
            quantityProduct: parseInt(quantity),
            priceProduct: parseFloat(price).toFixed(2)
        })
    }

    const updateProduct = async(id,name,detail,photos,category,quantity,price) =>{
        await updateDoc(doc(db,"products",id),{
            nameProduct: name,
            detailProduct:detail,
            photosProduct:photos,
            categoryProduct:category,
            quantityProduct:parseInt(quantity),
            priceProduct: parseFloat(price).toFixed(2)
        })
    }

    const deleteProduct = async(id)=>{
        await deleteDoc(doc(db,"products",id))
    }


    const addToCart=async(id,name,photos,price)=>{
        await addCart(id,name,photos,price)
    }



    return(
        <>
            <ContextProducts.Provider value={{
                lstProducts:products,
                getProducts,
                addProduct,
                updateProduct,
                deleteProduct,
                addToCart,
                user,
                logOut,
                getUser,
                cart,
                loadCart
            }}>{children}</ContextProducts.Provider>
        </>
    )
};
