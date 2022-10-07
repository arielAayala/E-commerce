import {useState, useEffect} from 'react';
const Slider = () => {
    const [products] = useState(); //Imagenes de productos que se van a ver en el scroll
    const [index, setIndex] = useState(); //Cantidad de imagenes 
    //Size of products in interval
    useEffect(() => {
        const lastIndex = products.length - 1;
        if (index < 0) {
            setIndex (lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    },[index, products]); //UseEffect que renderiza la posicion actual del index scroll para resetearlo si se muestra el ultimo producto
    //Slider Interval
    useEffect(()=>{
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000)
        return () => {
            clearInterval(slider)
        }
    }, [index])//UseEffect que mueve automaticamente el slider en un intervalo de 5s (5000) 
    return ( 
        <section>
            <div>
                <h2> Productos mas vendidos </h2>
            </div>
            <div>
                {products.map((item, indexProducts) => {
                    const {id} = item; //Se referencia al id del productos, y cualquier atributo de este
                    let position = 'nextSlide';
                    if (indexProducts === index) {
                        position = 'activeSlide'
                    }
                    if (indexProducts === index - 1 || (index === 0 && indexProducts === products.length - 1)){
                        position = 'lastSlide'
                    }//Busca la posicion actual del slider y lo reubica
                    return (
                        <article className={position} key={id}>
                            <img></img> 
                        </article> //Aca se agregan las imagenes
                    )
                })} 
                <button className='prev' onClick={() => setIndex(index - 1)}>
                    <i className='fas fa-arrow-left'></i>
                </button>
                <button className='next' onClick={() => setIndex(index + 1)}>
                    <i className='fas fa-arrow-right'></i>
                </button>
            </div>
        </section>
    );
}
export default Slider