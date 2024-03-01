import Link from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa';

const layout = ({ children }) => {
    const role = "teacher"
    return (
        <div className='flex '>
            {(role == "teacher") &&
                <ul className='min-h-screen bg-slate-300 w-[230px] p-5 x space-y-2 transition-all'>
                    <li className='bg-white px-3 py-1 flex gap-1 items-center rounded-md  hover:translate-x-2 duration-500 hover:cursor-pointer'><FaHome className='text-[18px]'></FaHome><Link href={'/dashboard/teacher'}>Home</Link></li>
                    <li className='bg-white px-3 py-1 rounded-md  hover:translate-x-2 duration-500 hover:cursor-pointer'><Link href={'/dashboard/teacher/addClass'}>Add Class</Link></li>
                    <li className='bg-white px-3 py-1 rounded-md hover:translate-x-2 duration-500 hover:cursor-pointer'><Link href={'/dashboard/teacher/allClass'}>All Classes</Link></li>
                    <li className='bg-white px-3 py-1 rounded-md hover:translate-x-2 duration-500 hover:cursor-pointer'><Link href={'/dashboard/profile'}>Profile</Link></li>
                </ul>
            }
            {(role == "student") &&
                <ul className='min-h-screen bg-slate-300 w-[230px] p-5 x space-y-2 transition-all'>
                    <li className='bg-white px-3 py-1 flex gap-1 items-center rounded-md  hover:translate-x-2 duration-500 hover:cursor-pointer'><FaHome className='text-[18px]'></FaHome><Link href={'/dashboard/student'}>Home</Link></li>
                    <li className='bg-white px-3 py-1 rounded-md  hover:translate-x-2 duration-500 hover:cursor-pointer'><Link href={'/dashboard/teacher/addClass'}>My enrolled class</Link></li>
                    <li className='bg-white px-3 py-1 rounded-md hover:translate-x-2 duration-500 hover:cursor-pointer'><Link href={'/dashboard/profile'}>Profile</Link></li>
                </ul>
            }

            <div className='flex-1'>
                {children}
            </div>

        </div>
    );
};

export default layout;