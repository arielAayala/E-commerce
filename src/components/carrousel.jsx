import React, { useState } from 'react';

const Carrousel = () => {
    const images = ['slider_1.jpg','slider_2.jpg','slider_3.jpg']
    const [selectedIndex, setSelectedIndex] = useState();
    const [image, setImage] = useState(images[0]);
    
    const selectNewImage = (index: number, images: string [], next = true)=>{
        const condition = next ? selectedIndex < images.length - 1 : index > 0
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length -1
        setImage(images[nextIndex]);
        setSelectedIndex(nextIndex)
    }; 

    const previous = () => {
        selectNewImage(selectedIndex, images, false);
    };
    const next = () => {
        selectNewImage(selectedIndex, images);
    }
    return (
        <>
            <img src={require(`../assets/static/${image}`).default} alt='ERROR 404'/>
            <button onClick={previous}>{'<'}</button>
            <button onClick={next}>{'>'}</button>
        </>
    );
}

export default Carrousel;
