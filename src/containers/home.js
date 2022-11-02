import Carrousel from "../components/carrousel";
export default function Home() {
    return(
        <>
            <div className="w-100 m-auto">
                <Carrousel  autoPlay={true}></Carrousel>
            </div> 
        </>
    )
};
