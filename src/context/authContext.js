import AuthContext from "./context"
import React,{useEffect, useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged ,GoogleAuthProvider, signInWithEmailAndPassword,signOut,signInWithPopup,sendPasswordResetEmail} from "firebase/auth"
import {auth} from "../services/firebase"
import { setDoc,doc, getDocs,collection, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
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

    const getCart = async(userId) =>{
        const snap = await getDoc(doc(db,"users",userId))
        console.log(snap.data().cart)
        setCart(snap.data().cart)
    
    }

    const addCart = async(id,name,photo)=>{
        const lst = cart
        lst.push({
            "id":id,
            "nameProduct":name,
            "photosProduct":photo
        })
        await updateDoc(doc(db,"users",user.uid),{
          "cart":lst  
        })
        getCart()
    }

    const deleteCart = async(id)=>{
        const lst = cart
        lst.splice(id,1)

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
            deleteCart
            }}>
            {children}
        </AuthContext.Provider>
        </>        
    )
}