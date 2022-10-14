import ContextProducts from "./context"
import { db } from "../services/firebase"
import { useState } from "react"
import { setDoc,updateDoc,doc,collection,getDocs, deleteDoc } from "firebase/firestore"

export default function ProductsProvider(props) {
    const {children} = props

    const [products, setProducts] = useState([]);

    const incrementalCount = async() =>{
        let count = -1
        const snap = await getDocs(collection(db,"products"))
        snap.forEach((i)=>{
            if ( count < parseInt(i)){
                count = parseInt(i)
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

    const addProduct = async(name,detail,photos,category) => {
        await setDoc(doc(db,"products", (await incrementalCount()).toString),{
            nameProduct: name,
            detailProduct:detail,
            photosProduct:photos,
            categoryProduct:category,
            quantityProduct:0
        })
    }

    const updateProduct = async(id,name,detail,photos,category,quantity) =>{
        await updateDoc(doc(db,"products",id),{
            nameProduct: name,
            detailProduct:detail,
            photosProduct:photos,
            categoryProduct:category,
            quantityProduct:quantity
        })
    }

    const deleteProduct = async(id)=>{
        await deleteDoc(doc(db,"products",id))
    }



    return(
        <>
            <ContextProducts.Provider value={{
                lstProducts:products,
                getProducts,
                addProduct,
                updateProduct,
                deleteProduct
            }}>{children}</ContextProducts.Provider>
        </>
    )
};
