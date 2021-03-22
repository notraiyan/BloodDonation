import React,{useState} from 'react';
import camp1 from './camp1.png';
import camp2 from './camp2.png';
import camp3 from './camp3.jpg';
import camp4 from './camp4.jpg';
import camp5 from './camp5.png';
import {FaArrowCircleLeft,FaArrowCircleRight} from 'react-icons/fa';
import './Home.css';


const SliderData = [
    {
        image: camp1
    },
    {
        image: camp2
    },
    {
        image: camp3
    },
    {
        image: camp4
    },
    {
        image: camp5
    },
];


const Campaign = () => {
    const [current,setCurrent]=useState(0);
    const length=SliderData.length;
    const nextSlide=()=>{
        setCurrent(current===length-1 ? 0: current + 1);
    };
    const prevSlide=()=>{
        setCurrent(current === 0 ? length-1 : current - 1 );
    };
    return (
        <section className="slider">
            <FaArrowCircleLeft className="left" onClick={prevSlide}/>
            <FaArrowCircleRight className="right" onClick={nextSlide}/>
            {SliderData.map((slide, index)=>{
                return(
                    <>
                    {index===current &&(<>
                    <img src={SliderData[index].image} className="show" />
                    <img src={SliderData[(index+1)%length].image} className="show" />
                    <img src={SliderData[(index+2)%length].image} className="show" />
                    </>
                    )}
                    
                    </>
                );
            })}
        </section>
    )
};

export default Campaign;