import React, { useState } from 'react';
import Slider1 from "../assets/static/slider_1.jpg"
import Slider2 from "../assets/static/slider_2.jpg"
import Slider3 from "../assets/static/slider_3.jpg"
const Carrousel = () => {
    const images = [Slider1,Slider2,Slider3]
    const [selectedIndex, setSelectedIndex] = useState();
    const [image, setImage] = useState(images[0]);
    
    const selectNewImage = (index, images, next=true )=>{
        const condition = next ? (selectedIndex < images.length - 1 ): (index > 0)
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : images.length -1)
        setImage(images[nextIndex]);
        setSelectedIndex(nextIndex)
    }; 

    const previous = () => {
        selectNewImage(selectedIndex, images, false);
    };
    const next = () => {
        selectNewImage(selectedIndex, images,true);
    }
    return (
        <>
            <img src={image} alt='ERROR 404'/>
            <button onClick={previous}>{'<'}</button>
            <button onClick={next}>{'>'}</button>
        </>
    );
}

export default Carrousel;
