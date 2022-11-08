export default function ProfileData(props) {
    return(

        <div className="row bg-white rounded text-center my-3" key={"div row"+props.id}>
            <div className="col-4 my-auto " key={"div col-2"+props.id} >
                <h6 key={"h3"+props.id}>Precio Final: ${props.totalToPay}</h6>
            </div>
            <div className="col-8" key={"div col-8"+props.id}>
               { props.detailSell.map(i=>{
                    return(
                        <div key={"div detailSell "+i.idProduct} className="border rounded my-1">
                            <h6 key={"h6 name"+ i.nameProduct }>Producto: {i.nameProduct}</h6>
                            <h6 key={"h6 price"+i.priceProduct }>Precio Unitario: ${i.priceProduct}</h6>
                            <h6 key={"h6 quantity"+i.quantityProduct }>Cantidad: {i.quantityProductSell}</h6>
                        </div>

                    )
                })}
            </div>
        </div>

    )
}