export default function Product(props) {
    return(
        <>
            <div className="card"  style={{"width": "18rem"}}>
                <img src={props.photosProduct} className="card-img-top" alt={props.nameProduct}></img>
                <div className="card-body">
                    <h5 className="card-title">{props.nameProduct}</h5>
                    <p className="card-text">{props.detailProduct}</p>
                </div>
            </div>
        </>
    )
}