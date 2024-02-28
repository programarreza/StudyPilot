"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaQuoteLeft } from "react-icons/fa";
import RatingComponent from './RatingComponent';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import SwiperCore, { Navigation } from 'swiper/core';

// Install Swiper modules
SwiperCore.use([Navigation]);



const Feedback = () => {
    const [rev, setRev] = useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setRev(data))
    },[]);



    return (
        <div className="w-9/12 mx-auto my-14">
           <p className='text-center text-blue-800 text-5xl w-fit mx-auto my-20 font-bold shadow-2xl p-5 px-12 shadow-red-950'>USER'S FEEDBACK</p>
            <Swiper navigation={true}  className="mySwiper">
        {
            rev.map(item=><SwiperSlide key={item._id}>
                <div className="flex flex-col justify-center items-center">
                   <FaQuoteLeft className="w-12 h-12 text-black"></FaQuoteLeft>
           <RatingComponent star={item.rating}></RatingComponent>
  
                    <p className="px-28 text-center text-lg">{item.details}</p>
                    <div className='flex justify-center items-center gap-3'>
                    <img className='w-12 h-12 rounded-full' src={`${item.image}`} />
                    <p className="text-center text-xl text-orange-500 font-bold">{item.name}</p>
                    </div>
                </div>

            </SwiperSlide>)
        }
      
        
      </Swiper>
        </div>
    );
};

export default Feedback;
