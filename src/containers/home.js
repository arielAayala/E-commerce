
import Carrousel from "../components/carrousel";
import { Footer } from "../components/footer";

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
<<<<<<< HEAD
            <div className="w-75">
                <Carrousel></Carrousel>
                <Footer></Footer>
=======
            <div className="w-100 m-auto">
                <Carrousel  autoPlay={true}></Carrousel>
>>>>>>> 6e7bf40c7a1fbd9e80d03fe1ef761538ef3fa7be
            </div>
            
        </>
    )
};
