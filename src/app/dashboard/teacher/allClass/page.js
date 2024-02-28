import demoPic from "@/assets/image/demo.jpg";
import Image from "next/image";


import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';
import DeleteClass from './deleteClass';

const getClases = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/clases", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch clases");
      }
      return res.json();
    } catch (error) {
      console.log("Error loading clases:", error);
    }
}
const Clases = async () => {
    const clases = await getClases()
    
    return (
        <div className='mx-5'>
            <h2 className='text-center my-5 text-4xl font-bold'>My all classes</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    clases?.map(cls => <div key={cls?._id} className="card bg-base-100 shadow-xl">
                        <figure className='overflow-hidden'>
                            <Image className="w-full h-[250px] transition-all duration-300 hover:scale-110" src={demoPic} alt="classes" />
                            </figure>
                        <div className="card-body">
                            <div>
                                <h2 className="card-title">{cls?.title}</h2>
                                <p className='text-[15px]'>{cls?.author}</p>
                            </div>
                            <p>{cls?.description}</p>

                            <div className="card-actions justify-between items-center">
                                <h3 className='text-xl font-semibold'>Price:<span> {cls?.price}</span></h3>
                                <h2 className='text-[18px] font-semibold'>Total Enrollment: 0</h2>
                                <p>status: pending</p>
                            </div>
                            <div className='flex bg-slate-300 p-2 rounded-lg items-center justify-between'>
                                <button className='bg-black text-xl font-medium text-white px-2  rounded-md'><Link href={`/dashboard/teacher/allClass/SeeDetails/${cls?._id}`}>See Details</Link></button>
                                <div className='flex gap-2 hover:cursor-pointer'>
                                    <Link href={`/dashboard/teacher/allClass/editClass/${cls?._id}`}><FaEdit className='text-[28px]'></FaEdit></Link>
                                    <DeleteClass id={cls?._id}></DeleteClass>

                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};



export default Clases;
