import AuthContext from "./context"
import React,{useEffect, useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged ,GoogleAuthProvider, signInWithEmailAndPassword,signOut,signInWithPopup,sendPasswordResetEmail} from "firebase/auth"
import {auth} from "../services/firebase"
import { setDoc,doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";



export default function AuthProvider(props){
    const{children} = props

    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    const logIn = (email,password)=> signInWithEmailAndPassword(auth,email,password)

    const register = (email,password) => createUserWithEmailAndPassword(auth,email,password)

    const resetPassword = (email) => sendPasswordResetEmail(auth,email)

    const logInGoogle =  () => { 
        const GoogleAuth = new GoogleAuthProvider()
        return signInWithPopup(auth,GoogleAuth)
    }

    const logOut = () => signOut(auth)


    useEffect(()=>{
        onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
    },[])

    //guardar usuarios en DB
    const addUser = async(user, userName) =>{
        if (!user) return
        await setDoc(doc(db,"users",user.user.uid),{
            uid: user.user.uid,
            displayNameUser: userName ? userName: user.user.displayName,
            emailUser: user.user.email,
            photoUser: user.user.photoURL,
            cart:[]
        })
    }

    //carrito
    const [cart,setCart] = useState([])

    const getCart = async() =>{
        const snap = await getDoc(doc(db,"users",user.uid))
        setCart(snap.data().cart) 
    }

    const addCart = async(id,name,photo,)=>{
        let lst = []

        const snap = await getDoc(doc(db,"users",user.uid))
        lst.push({
            "idProduct":id,
            "nameProduct":name,
            "photosProduct":photo,
            "quantityProduct":1
        })
        await snap.data().cart.forEach(i => {
            let flag = false
            let cont = 0
            lst.forEach(j =>{
                if(j.idProduct === i.idProduct){
                    lst.push({
                        "idProduct":i.idProduct,
                        "nameProduct":i.nameProduct,
                        "photosProduct":i.photosProduct,
                        "quantityProduct":i.quantityProduct +1
                    })
                    lst.splice(cont,1)
                    flag = true
                }
                cont +=1
            })
            if (!flag){
                lst.push({
                    "idProduct":i.idProduct,
                    "nameProduct":i.nameProduct,
                    "photosProduct":i.photosProduct,
                    "quantityProduct":i.quantityProduct
                })
            }
        })
         
        await updateDoc(doc(db,"users",user.uid),{
            "cart":lst
        })
        await getCart()
    }

    const deleteCart = async(id)=>{
        const lst = []
        const snap = await getDoc(doc(db,"users",user.uid))
        snap.data().cart.forEach(i=>{
            lst.push({
                "id":i.id,
                "nameProduct":i.nameProduct,
                "photosProduct":i.photosProduct
            })
        })
        for (let i = 0; i < lst.length; i++) {
            if (lst[i].id === id){
                console.log("encontro")
                lst.splice(i,1)
            }
        }

        await updateDoc(doc(db,"users",user.uid),{
            "cart":lst  
          })
        await getCart()
    } 

    const deleteAllCart = async() =>{
        let lst = []
        await updateDoc(doc(db,"users",user.uid),{
            "cart":lst
        })
        getCart()
    }

    return (
        <>
        <AuthContext.Provider value={{
            user,
            loading,
            logIn,
            register,
            resetPassword,
            logInGoogle,
            logOut,
            addUser,
            getCart,
            lstCart:cart,
            addCart,
            deleteCart,
            deleteAllCart
            }}>
            {children}
        </AuthContext.Provider>
        </>        
    )
}