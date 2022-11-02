
import Carrousel from "../components/carrousel";

import { useEffect } from "react";


export default function Home() {
    useEffect(() => {
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
