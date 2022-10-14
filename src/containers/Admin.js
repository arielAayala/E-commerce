import { useContext } from "react";
import context from "../context/context";


export default function Admin() {
    const {getProducts} = useContext(context)
    
    return(
        <>
            <h1>admin</h1>
        </>
    )

};
