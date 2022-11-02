
import Carrousel from "../components/carrousel";

import { useContext, useEffect } from "react";
import context from "../context/context";

export default function Home() {
    const {user} = useContext(context)

    useEffect(() => {
      console.log(user)
      // eslint-disable-next-line
    }, [])

    return(
        <>
            <div className="w-100 m-auto">
                <Carrousel  autoPlay={true}></Carrousel>
            </div>
        </>
    )
};
