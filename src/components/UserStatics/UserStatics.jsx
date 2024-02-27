'use client'
import ScrollTrigger from 'react-scroll-trigger';
import NumberCount from './NumberCount';
import { useState } from 'react';
const UserStatics = () => {
    const[counterOn,setCounterOn]=useState(false)
    return (
        <div className='bg-gray-50 h-44'>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className="stat-value text-primary text-center">{counterOn && <NumberCount endValue={100}></NumberCount>}</div>
            </ScrollTrigger>
        </div>
    );
};

export default UserStatics;