import { getSingleClass } from '@/app/allClasses/[id]/page';
import AddAssignment from '@/components/AddAssignment';
import React from 'react';

const SeeDetails = async({ params }) => {
    const classDetail= await getSingleClass(params.id)
    // console.log("class details",classDetail)
    return (
        <div className='mx-5'>
            <h2 className='text-center font-bold text-3xl my-5'>Class details about : {classDetail.cls.title}</h2>
            <div className='grid grid-cols-3 gap-3'>
                <div className="h-[200px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl flex justify-center items-center text-white">
                    <h2 className='text-3xl font-bold '>Total Enrollment: 0 </h2>
                </div>
                <div className="h-[200px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl flex justify-center items-center text-white">
                    <h2 className='text-3xl font-bold '>Total Assignment: 0 </h2>
                </div>
                <div className="h-[200px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl flex justify-center items-center text-white">
                    <h2 className='text-3xl font-bold p-2 text-center'>Assignment submitted per day: 0 </h2>
                </div>
            </div>
            
            <AddAssignment classDetails={classDetail.cls}></AddAssignment>
    
           
        </div>
    );
};

export default SeeDetails;