import Carrousel from "../components/carrousel";
export default function Home() {
    return(
        <>
            <div className="w-100 m-auto my-5">
                <Carrousel  autoPlay={true}></Carrousel>
            </div> 
        </>
    )
};
