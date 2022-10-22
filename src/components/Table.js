import DataTable from 'react-data-table-component';
import { useContext, useEffect,useState } from "react";
import context from "../context/context";

export default function Table() {

    const {lstProducts,getProducts} = useContext(context)

    const [pending,setPeding] = useState(true)
    const [searcher,setSearcher] = useState("")


    const inputChange = (e) => setSearcher(e.target.value)

    const products = lstProducts.map((i)=>{return{...i,}})

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
        }
    ]

    const ExpandedComponent= ({ data }) => {
        return (
        <>
            
            <h4>{data.detailProduct}</h4>
            <div>
            {data.photosProduct.map((i)=>{
                return <img  key={i} alt='photos' src={i}></img>
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
            <input name='searcher' onChange={inputChange}  placeholder='Buscar'></input>
            
            <DataTable title="Productos" selectableRows   fixedHeader fixedHeaderScrollHeight="300px" expandableRows expandableRowsComponent={ExpandedComponent} pagination={true} columns={columns}  data={products.filter ((i) =>{

                if (searcher === ""){
                    return i
                } else if(i.nameProduct.toLowerCase().includes(searcher.toLowerCase())  || i.id.toLowerCase().includes(searcher.toLowerCase())){
                    return i
                }
            })} progressPending={pending} />
        </>

    );
};

