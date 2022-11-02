import Header from "../components/header"
import Carrousel from "../components/carrousel";
import Slider1 from "../assets/static/slider_1.jpg"
import Slider2 from "../assets/static/slider_2.jpg"
import Slider3 from "../assets/static/slider_3.jpg"
import { useContext, useEffect } from "react";
import context from "../context/context";


export default function Home() {
    return(
        <>
            <Header></Header>
            <div className="w-100 m-auto">
                <Carrousel images={images} autoPlay={true}></Carrousel>
            </div>
        </>
    )
};
