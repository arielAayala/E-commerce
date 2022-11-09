import { Navigate } from "react-router-dom"
import React, { useContext } from "react";
import context from "../context/context";
import Header from "../components/header";
import Footer from "../components/footer";

export default function ProtectedRoute({children}){
    const {user, loading} = useContext(context)

    if (loading) return (
    <>
        <Header></Header>
        <div>
            <div className="text-center my-5">
                <h1 className="h3 mb-3 fw-normal">Cargando...</h1>
            </div>
        </div>
        <Footer></Footer>
    </>
    )

    if (!user || user.uid === "7TQ1N3zbIAgVVTTZQ8Eo0WGcbn13"){
        return <Navigate to="/login"/>
    }else return <>{children}</>
}