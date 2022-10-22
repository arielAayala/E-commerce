import ButtonAgregar from "../components/ButtonAgregar";
import Table from "../components/Table";



export default function Admin() {



    return(
        <>
            <div className="container my-3 text-center">
                <div className="row">
                    <div className="col">
                        <h1>Admin</h1>
                    </div>
                    <div className="col">

                    </div>
                    <div className="col">
                        <ButtonAgregar></ButtonAgregar>
                    </div>
                </div>
                <div className="w-100">
                    <Table></Table>
                </div>
            </div>



        </>
    )

};
