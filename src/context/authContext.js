import Context from "./context"
import { React,useState,useEffect } from "react";
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged,signOut,signInWithPopup,sendPasswordResetEmail} from "firebase/auth"
import {auth} from "../services/firebase"



export default function AuthContext(props){
    const{children} = props

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, setUser] = useState(null);

    const logIn = (email,password)=> signInWithEmailAndPassword(auth,email,password)

    const register = (email,password) => createUserWithEmailAndPassword(auth,email,password)

    const resetPassword = (email) => sendPasswordResetEmail(auth,email)


    const logInGoogle =  () => { 
        const GoogleAuth = new GoogleAuthProvider()
        return signInWithPopup(auth,GoogleAuth)
    }

    const logOut = () => signOut(auth)

    useEffect(()=>{
        onAuthStateChanged((auth,user)=>{
            setUser(user)
        })
    },[]) 


    return (
        <Context.Provider value={{user,logIn,register,resetPassword,logInGoogle,logOut}}>{children}</Context.Provider>
    )
}