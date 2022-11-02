import { useContext, useEffect } from "react"
import context from "../context/context"

export default function Cart() {
    const {getCart,lstCart,user} = useContext(context)

    useEffect(() => {
        getCart(user.uid)
        console.log(user)
        console.log("cargar cart")
        console.log(lstCart)
        // eslint-disable-next-line
    }, []);

  

    return(
        <>
            <div>
                { lstCart.map(i=>{
                    return <h3 key={i.id}> {i.id}---{i.photosProduct} </h3>
                })}
            </div>
        </>
    )
}