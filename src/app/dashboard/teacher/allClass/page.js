import React from 'react';
import demoPic from '@/assets/image/demo.jpg'
import Image from 'next/image';
const page = () => {
    const classes = [0, 1, 2, 3, 4, 5]
    return (
        <div className='mx-5'>
            <h2 className='text-center my-5 text-4xl font-bold'>My all classes</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    classes.map(cls => <div key={cls} className="card bg-base-100 shadow-xl">
                        <figure className='overflow-hidden'><Image className="w-full h-[350px] transition-all duration-300 hover:scale-110" src={demoPic} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">React fundamentals</h2>
                            <p>Master the core concepts of React.This comprehensive course.</p>
                            <h2 className='text-[18px]'>Total Enrollment:0</h2>
                            <div className="card-actions justify-between items-center">
                                <h3 className='text-xl font-semibold'>Price:<span> $120</span></h3>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default page;