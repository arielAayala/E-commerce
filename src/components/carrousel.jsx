import React, { useState, useEffect } from 'react';
import Slider1 from "../assets/static/slider_1.jpg"
import Slider2 from "../assets/static/slider_2.jpg"
import Slider3 from "../assets/static/slider_3.jpg"
    

export default function Carrousel (props) {
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
        selectNewImage(selectedIndex, images, true);
    }
    useEffect(() =>{
        if (props.autoPlay){
            const interval = setInterval(()=>{
                selectNewImage(selectedIndex, images)
            }, 4000);
            return () => clearInterval(interval);
        }
    })
    return (
        <>
            <div className='d-flex justify-content-center rounded' style={{"height":"25rem"}} >
                <button className='btn btn-outline-primary rounded-0 ' onClick={previous}>{'<'}</button>
                <img className='w-75 border border-primary' src={image} alt={`${image}`}/>
                <button className='btn btn-outline-primary  rounded-0' onClick={next}>{'>'}</button>
            </div>
        </>
    );
}