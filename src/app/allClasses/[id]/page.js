/* eslint-disable @next/next/no-img-element */
import React from 'react';
import demoImg from '@/assets/image/demo.jpg'
import Image from 'next/image';
import axios from 'axios';
import EnrollNow from '@/components/EnrollNow';
export const getSingleClass = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/clases/${id}`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch the class details");
      }
      return res.json();
    } catch (error) {
      console.log("Error loading clases:", error);
    }
}
const page = async ({ params }) => {
    const id = params.id
    const classDetail = await getSingleClass(id)
   
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={classDetail.cls?.image} className=" w-1/3 h-[450px] rounded-lg shadow-2xl hover:scale-105 transition-all duration-300 " alt={`course${id}`}/>
                    <div>
                        <h1 className="text-5xl font-bold">{classDetail.cls.title}</h1>
                        <p className='text-[20px] mt-1'>{classDetail.cls.author}</p>
                        <p className="py-6">{classDetail.cls.description}</p>
                        <p className='text-xl font-semibold mb-2'>Price: ${classDetail.cls.price}</p>
                        <EnrollNow classDetail={classDetail}></EnrollNow>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;