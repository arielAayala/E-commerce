
import { useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import ProfileData from "../components/profileData";
import context from "../context/context";

export default function Profile() {
    const {user,getUser} = useContext(context)
    const navigate = useNavigate()


    const [lstBuy,setLstBuy] = useState([])


    useEffect(() => {
        if (!user){
            navigate("/login")
        }
        const loadData = async()=>{
            try {
                setLstBuy((await getUser(await user.uid)).buyUser)
            } catch (error) {      
            }
        }
        loadData()
        console.log("cargar");
    }, [user,getUser,navigate])


    return(
        <>
            <Header></Header>
            {!user ? (
                <div>
                    cargando...
                </div>
            ) : (
                <div className="w-75 m-auto">
                    <h1 className="text-center ">Perfil</h1>
                    <h6 className="text-center">Bienvenido {user.email}</h6>
                    {lstBuy.length > 0 ? (
                        <>
                            <h6 className="text-center">Tus compras:</h6>
                            <div className="container border my-3">
                                {
                                    lstBuy.map((i)=>{
                                        return(<ProfileData key={lstBuy.indexOf(i)+"component"} id={lstBuy.indexOf(i)} totalToPay={i.totalToPay} detailSell={i.detailSell}/>)
                                    })
                                }
                            </div>
                        </>     
                    ):(
                        <div className="my-5 m-auto text-center ">
                            <h6 className="">No has hechos compras :/ </h6>
                            <button onClick={()=>{navigate("/products")}} className="btn btn-outline-dark">Ver productos</button>
                        </div>
                    )}
                </div>
            )
            }
            <Footer></Footer>
        </>
    )

}