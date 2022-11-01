import AuthContext from "./context"
import React,{useState} from "react";
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword,signOut,signInWithPopup,sendPasswordResetEmail} from "firebase/auth"
import {auth} from "../services/firebase"
import { setDoc,doc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";



export default function AuthProvider(props){
    const{children} = props

    const [user] = useState(null); 

    const logIn = (email,password)=> signInWithEmailAndPassword(auth,email,password)

    const register = (email,password) => createUserWithEmailAndPassword(auth,email,password)

    const resetPassword = (email) => sendPasswordResetEmail(auth,email)

    const logInGoogle =  () => { 
        const GoogleAuth = new GoogleAuthProvider()
        return signInWithPopup(auth,GoogleAuth)
    }

    const logOut = () => signOut(auth)

    const addUser = async(user) =>{
        if (!user) return
        await setDoc(doc(db,"users",user.uid),{
            uid: user.uid,
            displayNameUser: user.displayName,
            emailUser: user.email,
            photoUser: user.photoURL,
            isOnline: false
        })
    }

    const stateUser = async(userLogin) => {
        await updateDoc(doc(db, "users", userLogin.user.uid),{
            isOnline: true
        })
    }

    return (
        <>
        <AuthContext.Provider value={{
            user,
            logIn,
            register,
            resetPassword,
            logInGoogle,
            logOut,
            addUser,
            stateUser
            }}>
            {children}
        </AuthContext.Provider>
        </>        
    )
}