import AuthContext from "./context"
import React,{useEffect, useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged ,GoogleAuthProvider, sendEmailVerification,signInWithEmailAndPassword,signOut,signInWithPopup,sendPasswordResetEmail} from "firebase/auth"
import {auth} from "../services/firebase"
import { setDoc,doc, getDoc} from "firebase/firestore";
import { db } from "../services/firebase";



export default function AuthProvider(props){
    const{children} = props

    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    const logIn = (email,password)=> signInWithEmailAndPassword(auth,email,password)

    const register = async (email,password) => {
        const newUser= await createUserWithEmailAndPassword(auth,email,password)
        await sendEmailVerification(newUser.user)
        await logOut()
         
        }

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

    const getUser = async(useruid)=>{
        const snap = await getDoc(doc(db,"users",useruid))
        return snap.data()
    }

    //guardar usuarios en DB
    const addUser = async(user) =>{
        if (!user) return
        const snap =await getDoc(doc(db,"users",user.user.uid))
        try {
            const lstBuy =snap.data().buyUser       
            await setDoc(doc(db,"users",user.user.uid),{
                uid: user.user.uid,
                emailUser: user.user.email,
                photoUser: user.user.photoURL,
                cart:[],
                buyUser: lstBuy
        })
        } catch  {
            const lstBuy =[]      
            await setDoc(doc(db,"users",user.user.uid),{
                uid: user.user.uid,
                emailUser: user.user.email,
                photoUser: user.user.photoURL,
                cart:[],
                buyUser: lstBuy
            })
        }

    }

    const [cart,setCart] = useState(0)
    const loadCart = async()=>{
        try {
            let count = 0
            const snap = (await getUser(await user.uid)).cart
            await snap.forEach(i => {
                count+= i.quantityProduct
            });
            setCart(count)
        } catch (error) {
        console.log(error); 
        }
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
            getUser,
            cart,
            loadCart
            }}>
            {children}
        </AuthContext.Provider>
        </>        
    )
}