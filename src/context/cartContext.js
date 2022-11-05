import { useContext } from "react";
import Cartcontext from "./context";


export default function CartProvider(props) {
    const {children} = props





    return(
        <>
        <Cartcontext.Provider value={{}} >
            {children}
        </Cartcontext.Provider>
        </>
    )
}