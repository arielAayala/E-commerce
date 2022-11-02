import Header from "../components/header"
import Carrousel from "../components/carrousel";
import Slider1 from "../assets/static/slider_1.jpg"
import Slider2 from "../assets/static/slider_2.jpg"
import Slider3 from "../assets/static/slider_3.jpg"

export default function Home() {

const images = [Slider1,Slider2,Slider3]

    return(
        <>
            <Header></Header>
            <div className="w-100 m-auto">
                <Carrousel images={images} autoPlay={true}></Carrousel>
            </div>
        </>
    )
};
