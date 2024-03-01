/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import demoPic from '@/assets/image/demo.jpg'
import { getClases } from '../dashboard/teacher/allClass/page';
import EnrollNow from '@/components/EnrollNow';
import Link from 'next/link';


const AllClasses = async () => {
    const Classes = await getClases()
    return (
        <div className='container mx-auto'>
            <h2 className='text-4xl font-bold text-center my-5'>All classes</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    Classes.map(cls => <div key={cls._id} className="card bg-base-100 shadow-xl">
                        <figure className='overflow-hidden'><img className="w-full h-[350px] transition-all duration-300 hover:scale-110" src={cls.image} alt="class image" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{cls?.title}</h2>
                            <h5 className='text-[14px] mb-2'>{cls?.author}</h5>
                            <p>{cls?.description}</p>
                            <h2 className='text-[18px]'>Total Enrollment:0</h2>
                            <div className="card-actions justify-between items-center">
                                <h3 className='text-xl font-semibold'>Price:<span> ${cls?.price}</span></h3>
                               {/* <EnrollNow id={cls._id} ></EnrollNow> */}
                               <Link href={`/allClasses/${cls._id}`}>seee details</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>

    );
};

export default AllClasses;