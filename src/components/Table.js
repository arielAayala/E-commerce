import DataTable from 'react-data-table-component';
import { useContext, useEffect,useState } from "react";
import context from "../context/context";

export default function Table() {


    const {lstProducts,getProducts} = useContext(context)

    const [pending,setPeding] = useState(true)

    const users = lstProducts.map((i)  => {return {
        product:i.nameProduct ,
        quantity: i.quantityProduct,
        detail:i.detailProduct,
        id:i.id,
        category:i.categoryProduct
    }})

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Product',
            selector: row => row.product,
            sortable: true,
        },
        {
            name: 'Detail',
            selector: row => row.quantity,
            sortable: true,
        },
        {
            name: 'Category',
            selector: row => row.category,
            sortable: true,
        },
        {
            name: 'Quantity',
            selector: row => row.quantity,
            sortable: true,
        }
    ]
	useEffect(() => {
        getProducts()
        console.log(lstProducts)
        console.log("cargar")
        setTimeout((() => {setPeding(false)}),3000)
	}, []);

	return <DataTable columns={columns} data={users} progressPending={pending} />;
};
