import DataTable from 'react-data-table-component';
import { useContext, useEffect,useState } from "react";
import context from "../context/context";
import ButtonUpdate from './ButtonUpdate';


export default function Table() {

    const {lstProducts,getProducts} = useContext(context)

    const [pending,setPeding] = useState(true)
    const [searcher,setSearcher] = useState("")


    const inputChange = (e) => setSearcher(e.target.value)



    const products = lstProducts.map((i)=>{return{...i,
        }})

        
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Product',
            selector: row => row.nameProduct,
            sortable: true,
        },
        {
            name: 'Category',
            selector: row => row.categoryProduct,
            sortable: true,
        },
        {
            name: 'Quantity',
            selector: row => row.quantityProduct,
            sortable: true,
        },{
            name:"",
            selector: row => (<ButtonUpdate key={row.id} id={row.id} detailProduct={row.detailProduct} quantityProduct={row.quantityProduct} categoryProduct={row.categoryProduct} nameProduct={row.nameProduct} ></ButtonUpdate>)
        },{
            name:"",
            selector: row => "hola"
        }
    ]

    const ExpandedComponent= ({ data }) => {
        return (
        <>
            
            <h6>{data.detailProduct}</h6>
            <div>
            {data.photosProduct.map((i)=>{
                return <img className="img-thumbnail rounded-2"  key={i} alt='photos' src={i}></img>
            })}
            </div>   
        </>
        );
    };



	useEffect(() => {
        getProducts()
        console.log("cargar")
        setTimeout((() => {setPeding(false)}),2200)
        // eslint-disable-next-line
	}, []);
    


	return (
        
        <>
            <div className='d-flex justify-content-start'>
                <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">🔎</span>
                        <input className="form-control" name='searcher' onChange={inputChange}  placeholder='Buscar'></input>
                </div>    
            </div>        
            
            
            <DataTable  title="Productos"  expandableRows expandableRowsComponent={ExpandedComponent} pagination={true} columns={columns}  data={
                // eslint-disable-next-line
                products.filter ((i) =>{

                if (searcher === ""){
                    return i
                } else if(i.nameProduct.toLowerCase().includes(searcher.toLowerCase())  || i.id.toLowerCase().includes(searcher.toLowerCase())){
                    return i
                }
            })} progressPending={pending}  responsive={true} highlightOnHover
            pointerOnHover/>
        </>

    );
};
