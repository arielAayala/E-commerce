import Header from "../components/header"
import Carrousel from "../components/carrousel";

export default function Home() {
    return(
        <>
            <Header></Header>
            <div className="w-100 m-auto">
                <Carrousel></Carrousel>
            </div>
        </>
    )
};
