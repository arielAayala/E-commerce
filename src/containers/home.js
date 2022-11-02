import Header from "../components/header"
import Carrousel from "../components/carrousel";
import { useContext, useEffect } from "react";
import context from "../context/context";


export default function Home() {

    const {user} = useContext(context)

    useEffect(() => {
      console.log(user)
    }, [])

    return(
        <>
            <Header></Header>
            <div className="w-100 m-auto">
                <Carrousel></Carrousel>
            </div>
        </>
    )
};
