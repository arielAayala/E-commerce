import Carrousel from "../components/carrousel";
import Footer from "../components/footer";
import Header from "../components/header";
export default function Home() {
    return(
        <>
            <Header></Header>
            <div className="w-100 m-auto my-5">
                <Carrousel  autoPlay={true}></Carrousel>
            </div> 
            <Footer></Footer>
        </>
    )
};
