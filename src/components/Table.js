import DataTable from 'react-data-table-component';
import { useContext, useEffect,useState } from "react";
import context from "../context/context";

export default function Table() {

    const {lstProducts,getProducts} = useContext(context)

    const [pending,setPeding] = useState(true)
    const [searcher,setSearcher] = useState("")


    const inputChange = (e) => setSearcher(e.target.value)


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
            name: 'Detail',
            selector: row => row.detailProduct,
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
	useEffect(() => {
        getProducts()
        console.log("cargar")
        setTimeout((() => {setPeding(false)}),2200)
        // eslint-disable-next-line
	}, []);
    
	return (
        
        <>
            <input name='searcher' onChange={inputChange}  placeholder='Buscar'></input>
            
            <DataTable pagination={true} columns={columns}  data={lstProducts.filter ((i) =>{
                if (searcher === ""){
                    return i
                } else if(i.nameProduct.toLowerCase().includes(searcher.toLowerCase())  || i.id.toLowerCase().includes(searcher.toLowerCase())){
                    return i
                }
            })} progressPending={pending} />
        </>

    );
};
