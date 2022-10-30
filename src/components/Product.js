export default function Product(props) {
    return(
        <>
            <div className="card"  style={{"width": "18rem", "height": "27rem"}}>
                <img src={props.photosProduct} style={{"height":"17.9rem","width":"17.9rem","margin":"auto"}} className="card-img-top " alt={props.nameProduct}></img>
                <div className="card-body">
                    <h5 className="card-title" style={{"fontSize":"1.25rem"}}>{props.nameProduct}</h5>
                    <p className="card-text" style={{"fontSize":"0.85rem"}}>{props.detailProduct}</p>
                    <p className="card-text" style={{"fontSize":"0.75rem"}}>cantidad disponible: {props.quantityProduct}</p>
                </div>
            </div>
        </>
    )
}