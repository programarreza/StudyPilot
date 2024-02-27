import React from 'react';
import demoPic from '@/assets/image/demo.jpg'
import Image from 'next/image';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from 'react-icons/fa';
import Link from 'next/link';
import DeleteClass from './deleteClass';
const page = () => {
    const classes = [0, 1, 2, 3, 4, 5]
    
    return (
        <div className='mx-5'>
            <h2 className='text-center my-5 text-4xl font-bold'>My all classes</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    classes.map(id => <div key={id} className="card bg-base-100 shadow-xl">
                        <figure className='overflow-hidden'><Image className="w-full h-[250px] transition-all duration-300 hover:scale-110" src={demoPic} alt="classes" /></figure>
                        <div className="card-body">
                            <div>
                                <h2 className="card-title">React fundamentals</h2>
                                <p className='text-[15px]'>Joy mahmud</p>
                            </div>
                            <p>Master the core concepts of React.This comprehensive course.</p>

                            <div className="card-actions justify-between items-center">
                                <h3 className='text-xl font-semibold'>Price:<span> $120</span></h3>
                                <h2 className='text-[18px] font-semibold'>Total Enrollment: 0</h2>
                                <p>status: pending</p>
                            </div>
                            <div className='flex bg-slate-300 p-2 rounded-lg items-center justify-between'>
                                <button className='bg-black text-xl font-medium text-white px-2  rounded-md'><Link href={`/dashboard/teacher/allClass/SeeDetails/${id}`}>See Details</Link></button>
                                <div className='flex gap-2 hover:cursor-pointer'>
                                    <Link href={`/dashboard/teacher/allClass/updateClass/${id}`}><FaEdit className='text-[28px]'></FaEdit></Link>
                                    <DeleteClass id={id}></DeleteClass>

                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default page;