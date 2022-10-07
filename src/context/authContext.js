import authContext from "./context"
import { React,useContext,useState,useEffect } from "react";
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged,signOut,signInWithPopup,sendPasswordResetEmail} from "firebase/auth"
import {auth} from "../services/firebase"




export const useAuth = () => {
    const context = useContext(authContext);
    return context
}

export function authProvider({children}){

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, setUser] = useState(null);

    const LogIn = (email,password)=> signInWithEmailAndPassword(auth,email,password)

    const register = (email,password) => createUserWithEmailAndPassword(auth,email,password)

    const resetPassword = (email) => sendPasswordResetEmail(auth,email)


    const logInGoogle =  () => { 
        const GoogleAuth = new GoogleAuthProvider()
        return signInWithPopup(auth,GoogleAuth)
    }

    const logOut = () => signOut(auth)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        onAuthStateChanged((auth,currentUser)=>{
            setUser(currentUser)
        })
    },[]) 


    return (
        <authContext.Provider value={{user,LogIn,register,resetPassword,logInGoogle,logOut}}>{children}</authContext.Provider>
    )
}