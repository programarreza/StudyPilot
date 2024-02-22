import React from 'react';
import demoImg from '@/assets/image/demo.jpg'
import Image from 'next/image';

const page = ({ params }) => {
    const id = params.id
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <Image src={demoImg} className=" w-1/3 h-[450px] rounded-lg shadow-2xl hover:scale-105 transition-all duration-300 " alt={`course${id}`}/>
                    <div>
                        <h1 className="text-5xl font-bold">Python full course</h1>
                        <p className='text-[20px] mt-1'>Joy mahmud</p>
                        <p className="py-6">Master the core concepts of React.js and build powerful user interfaces efficiently with this comprehensive course.</p>
                        <p className='text-xl font-semibold mb-2'>Price:$120</p>
                        <button className="btn btn-primary px-10">Pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;