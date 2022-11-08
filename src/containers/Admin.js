import ButtonAgregar from "../components/buttonAgregar";
import Footer from "../components/footer";
import Header from "../components/header";
import Table from "../components/Table";


export default function Admin() {



    return(
        <>
            <Header></Header>
            <div className="container my-3 text-center">
                <div className="row">
                    <div className="col-4 d-flex justify-content-start">
                        <h1>Admin</h1>
                    </div>

                    <div className="col-8 d-flex justify-content-end">
                        <ButtonAgregar></ButtonAgregar>
                    </div>
                </div>
                <div className="w-100 my-2">
                    <Table></Table>
                </div>
            </div>
            <Footer></Footer>
        </>
    )

};
