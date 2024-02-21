import Image from 'next/image';
import React from 'react';
import demoPic from '@/assets/image/demo.jpg'
const AllClasses = () => {
    const classes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <div className='container mx-auto'>
            <h2 className='text-4xl font-bold text-center my-5'>All classes</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    classes.map(cls => <div key={cls} className="card bg-base-100 shadow-xl">
                        <figure className='overflow-hidden'><Image className="w-full h-[350px] scale-110" src={demoPic} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">React fundamentals</h2>
                            <h5 className='text-[14px] mb-2'>Joy mahmud</h5>
                            <p>Master the core concepts of React.js and build powerful user interfaces efficiently with this comprehensive course.</p>
                            <h2 className='text-[18px]'>Total Enrollment:0</h2>
                            <div className="card-actions justify-between items-center">
                                <h3 className='text-xl font-semibold'>Price:<span> $120</span></h3>
                                <button className="btn btn-primary">Enroll now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>

    );
};

export default AllClasses;