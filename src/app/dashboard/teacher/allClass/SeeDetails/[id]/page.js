import React from 'react';

const SeeDetails = ({ params }) => {
    return (
        <div className='mx-5'>
            <h2>see details about the class no:{params.id}</h2>
            <div className=' grid grid-cols-3 gap-3'>
                <div class="h-[200px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl flex justify-center items-center text-white">
                    <h2 className='text-3xl font-bold '>Total Enrollment: 0 </h2>
                </div>
                <div class="h-[200px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl flex justify-center items-center text-white">
                    <h2 className='text-3xl font-bold '>Total Assignment: 0 </h2>
                </div>
                <div class="h-[200px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl flex justify-center items-center text-white">
                    <h2 className='text-3xl font-bold p-2 text-center'>Assignment submitted per day: 0 </h2>
                </div>
            </div>
        </div>
    );
};

export default SeeDetails;