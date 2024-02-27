import Image from 'next/image';
import React from 'react';
import profileBanner from '@/assets/profileBanner.jpg'

const Profile = () => {
    return (
        <div>
            <Image src={profileBanner} className='h-[320px] w-full' alt='profile banner' />
            <div className='relative flex justify-center'>
                <div className='w-3/4 flex justify-between p-5 border rounded-3xl h-[350px] shadow-2xl absolute -top-[150px] bg-white '>
                    <h3>Phone:+8802345668666</h3>
                    <div className='flex flex-col items-center -mt-[100px]'>
                        <Image src={profileBanner} className='w-[250px] h-[250px] rounded-full' alt='profile-pic' />
                        <h3 className='mt-5 text-xl font-semibold'>Teacher</h3>
                        <button className='mt-10 bg-slate-600 hover:bg-slate-800 text-orange-400 hover:text-orange-500 rounded-[30px] px-10 py-2 text-2xl font-semibold transition-all duration-500'>Follow</button>
                    </div>
                    <h3>Email:joy@gmail.com</h3>
                </div>
            </div>
        </div>
    );
};

export default Profile;