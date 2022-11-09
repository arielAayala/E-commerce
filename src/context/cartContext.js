import { useContext,useState } from "react";
import context from "./context";
import Cartcontext from "./context";
import { db } from "../services/firebase";
import { getDoc,getDocs,doc,collection,updateDoc,addDoc,serverTimestamp } from "firebase/firestore";

export default function CartProvider(props) {
    const {children} = props
    const {user,logOut,getUser,loadCart,cart,lstProducts,getProducts} = useContext(context)


     //carrito
     const [cartElement,setCartElement] = useState([])

     const getCart = async() =>{
         const snap = await getDoc(doc(db,"users",user.uid))
         setCartElement(snap.data().cart)
     }
 
     const addCart = async(id,name,photo,price)=>{
        try {
            let lst = []
            const snap = await getDoc(doc(db,"users",user.uid))
            lst.push({
                "idProduct":id,
                "nameProduct":name,
                "photosProduct":photo,
                "priceProduct":price,
                "quantityProduct":1
            })
            await snap.data().cart.forEach( i => {
                let flag = false
                let cont = 0
                lst.forEach(j => {
                    if (j.idProduct === i.idProduct) {
                        lst.push({
                            "idProduct": i.idProduct,
                            "nameProduct": i.nameProduct,
                            "photosProduct": i.photosProduct,
                            "quantityProduct": i.quantityProduct + 1,
                            "priceProduct": i.priceProduct
                        });
                        lst.splice(cont, 1);
                        flag = true;
                    }
                    cont += 1;
                })
                if (!flag){
                    lst.push({
                        "idProduct":i.idProduct,
                        "nameProduct":i.nameProduct,
                        "photosProduct":i.photosProduct,
                        "quantityProduct":i.quantityProduct,
                        "priceProduct":i.priceProduct
                    })
                }
            })
            await updateDoc(doc(db,"users",user.uid),{
                "cart":lst
            })
            await loadCart()
        } catch (error) {
            alert(error.message)
        }
     }
 
     const deleteCart = async(id)=>{
        try {
            const lst = []
            const snap = await getDoc(doc(db,"users",user.uid))
            await snap.data().cart.forEach(i=>{
                lst.push({
                    "idProduct":i.idProduct,
                    "nameProduct":i.nameProduct,
                    "photosProduct":i.photosProduct,
                    "quantityProduct":i.quantityProduct,
                    "priceProduct":i.priceProduct
                })
            })
            for (let i = 0; i < lst.length; i++) {
                if (lst[i].idProduct === id){
                    lst.splice(i,1)
                }
            }
            await updateDoc(doc(db,"users",user.uid),{
                "cart":lst  
              })
            await loadCart()
        } catch (error) {
            alert(error.message)
        }
     } 
 
     const deleteAllCart = async() =>{
        try {  
            let lst = []
            await updateDoc(doc(db,"users",user.uid),{
                "cart":lst
            })
            await loadCart()
        } catch (error) {
            alert(error.message)
        }
     }
 
     const confirmCart = async(total)=>{
        try {
            let flagError = false
            let lstDetail = []
            let lstProductsSell = []
            const snapProduct = (await getDocs(collection(db,"products")))
            const snapCart = (await getDoc(doc(db,"users",user.uid)))
            snapCart.data().cart.forEach(i=>{
                snapProduct.forEach(async j=>{
                    if(j.id ===i.idProduct){
                        let resta =  j.data().quantityProduct- i.quantityProduct
                        if(resta < 0){
                            flagError = true
                            throw alert("No hay stock disponible")
                        }else{
                            lstProductsSell.push({
                                "idProduct":i.idProduct,
                                "nameProduct":i.nameProduct,
                                "quantityProductSell":i.quantityProduct,
                                "priceProduct":i.priceProduct
                            })
                            await updateDoc(doc(db,"products",j.id),{
                                "quantityProduct":resta
                            })
                        }
                    }
                })
            })
            if (!flagError){
                lstDetail.push({
                    "userId":user.uid,
                    "totalToPay":total,
                    "detailSell":lstProductsSell,
                })
                const snap = await getDoc(doc(db,"users",user.uid))
                await updateDoc(doc(db,"users",user.uid),{
                    "cart":[],
                    "buyUser": (snap.data().buyUser).concat(lstDetail)
                })
                await addDoc(collection(db,"sells"),{
                    "userId":user.uid,
                    "totalToPay":total,
                    "detailSell":lstProductsSell,
                    "time":serverTimestamp()
                })
            }
            await loadCart()
        } catch (error) {
            alert(error.message) 
        }
    }

    const calculatePay = async()=>{
        const snap = await getDoc(doc(db,"users",user.uid))
        let total = 0
        snap.data().cart.forEach( i=>{
            total += (i.priceProduct * i.quantityProduct)
        })
        return total
    }

    const calculateElementsInCart = async()=>{
        const snap = await getDoc(doc(db,"users",user.uid))
        let elements = 0
        snap.data().cart.forEach(i =>{
            elements += i.quantityProduct
        })
        return elements
    }


    return(
        <>
        <Cartcontext.Provider value={{
            getCart,
            lstCart:cartElement,
            addCart,
            deleteCart,
            deleteAllCart,
            confirmCart,
            calculatePay,
            user,
            calculateElementsInCart,
            logOut,
            getUser,
            loadCart,
            cart,
            lstProducts,
            getProducts
        }} >
            {children}
        </Cartcontext.Provider>
        </>
    )
}