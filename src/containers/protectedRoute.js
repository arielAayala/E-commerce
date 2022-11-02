import { Navigate } from "react-router-dom"
import React, { useContext } from "react";
import context from "../context/context";

export default function ProtectedRoute({children}){
    const {user, loading} = useContext(context)

    if (loading) return (
        <div>
            <div className="text-center my-5">
                <h1 className="h3 mb-3 fw-normal">Cargando...</h1>
            </div>
        </div>
    )

    if (!user){
        return <Navigate to="/login"/>
    }else return <>{children}</>
}