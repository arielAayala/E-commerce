import AuthContext from "./context"
import React,{useEffect, useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged ,GoogleAuthProvider, signInWithEmailAndPassword,signOut,signInWithPopup,sendPasswordResetEmail} from "firebase/auth"
import {auth} from "../services/firebase"
import { setDoc,doc} from "firebase/firestore";
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
    const addUser = async(user) =>{
        if (!user) return
        await setDoc(doc(db,"users",user.user.uid),{
            uid: user.user.uid,
            emailUser: user.user.email,
            photoUser: user.user.photoURL,
            cart:[]
        })
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
            addUser
            }}>
            {children}
        </AuthContext.Provider>
        </>        
    )
}