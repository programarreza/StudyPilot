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
                        <figure><Image className="w-full h-[350px]" src={demoPic} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>

    );
};

export default AllClasses;