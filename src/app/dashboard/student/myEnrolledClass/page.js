/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import demoImg from '@/assets/image/demo.jpg'
import Link from 'next/link';
const getEnrolledClasses = async ()=>{
    try {
        const res = await fetch('http://localhost:3000/api/enrolledClass',{cache:'no-store'})
        if(!res.ok){
            throw new Error("failed to fetch enrolled classes")
        }
        return res.json()
    } catch (error) {
        console.log(error.message)
    }
}
const MyEnrolledClass = async () => {
    const enrolledClasses = await getEnrolledClasses()
    return (
        <div className='mx-5'>
        <h2 className='text-center my-5 text-4xl font-bold'>My enrolled classes</h2>
        <div className='grid grid-cols-3 gap-5'>
            {
                enrolledClasses?.map(cls => <div key={cls?._id} className="card bg-base-100 shadow-xl">
                    <figure className='overflow-hidden'>
                        <img className="w-full h-[250px] transition-all duration-300 hover:scale-110" src={cls.image} alt="classes" />
                        </figure>
                    <div className="card-body">
                        <div>
                            <h2 className="card-title">{cls?.title}</h2>
                            <p className='text-[15px]'>{cls?.author}</p>
                            <p className='text-[15px]'>{cls?.email}</p>
                        </div>
                        <p>{cls?.description}</p>

                        <div className="card-actions justify-between items-center">
                            <h3 className='text-xl font-semibold'>Price:<span> {cls?.price}</span></h3>
                            <h2 className='text-[18px] font-semibold'>Total Enrollment: 0</h2>
                            <p>status: pending</p>
                        </div>
                        <div className=''>
                            <button className='bg-black text-xl font-medium text-white px-2  rounded-md'><Link href={`/dashboard/student/myEnrolledClass/${cls?._id}`}>Continue</Link></button>
                            
                        </div>
                    </div>
                </div>)
            }
        </div>
    </div>
    );
};

export default MyEnrolledClass;