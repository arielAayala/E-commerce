
import Footer from "../components/footer";
import Header from "../components/header";
import LstProducts from "../components/LstProducts";

export default function Products() {

    

    return(
        <> 
            <Header></Header>
            <div className="w-75 m-auto my-5">
            <LstProducts></LstProducts>
            </div>
            <Footer></Footer>
        </>
    )
}