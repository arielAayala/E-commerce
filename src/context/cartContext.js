import { useContext,useState } from "react";
import context from "./context";
import Cartcontext from "./context";
import { db } from "../services/firebase";
import { getDoc,getDocs,doc,collection,updateDoc,addDoc,serverTimestamp } from "firebase/firestore";

export default function CartProvider(props) {
    const {children} = props
    const {user} = useContext(context)


     //carrito
     const [cart,setCart] = useState([])

     const getCart = async() =>{
         const snap = await getDoc(doc(db,"users",user.uid))
         setCart(snap.data().cart)
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
            console.log( lst);
            await updateDoc(doc(db,"users",user.uid),{
                "cart":lst
            })
            alert("producto agregado correctamente")
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
            alert("Producto eliminado del carrito")
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
            alert("Productos eleminados del carrito")
        } catch (error) {
            alert(error.message)
        }
     }
 
     const confirmCart = async(total)=>{
        try {
            let flagError = false
            let lstProductsSell = []
            const snapProduct = (await getDocs(collection(db,"products")))
            const snapCart = (await getDoc(doc(db,"users",user.uid)))
            snapCart.data().cart.forEach(i=>{
                snapProduct.forEach(async j=>{
                    if(j.id ===i.idProduct){
                        let resta =  j.data().quantityProduct- i.quantityProduct
                        if(resta < 0){
                            flagError = true
                            // eslint-disable-next-line no-throw-literal
                            throw "No hay stock disponible"
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
                await updateDoc(doc(db,"users",user.uid),{
                    "cart":[]
                })
                await addDoc(collection(db,"sells"),{
                    "userId":user.uid,
                    "totalToPay":total,
                    "detailSell":lstProductsSell,
                    "time":serverTimestamp()
                })
                alert("se ha realizado la compra correctamente")
            }else{
                alert("No hay stock disponible")
            }
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

    return(
        <>
        <Cartcontext.Provider value={{
            getCart,
            lstCart:cart,
            addCart,
            deleteCart,
            deleteAllCart,
            confirmCart,
            calculatePay
        }} >
            {children}
        </Cartcontext.Provider>
        </>
    )
}