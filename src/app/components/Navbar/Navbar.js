'use client'
import { useEffect, useState } from "react";

const Navbar = () => {

    const [active, setActive] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollValue = window.scrollY;
            setActive(scrollValue > 0)
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`h-24  ${active ? 'bg-red-300' : ''}`}>

            <div className="h-8 bg-green-200">
                <marquee behavior="scroll" direction="left">
                    here will be show important notice
                </marquee>
            </div>
            <div className="h-16 bg-green-400 grid grid-cols-8 px-10">
                <div className="bg-red-400 h- col-span-2">
                    
                </div>
                <div className="bg-white col-span-4">

                </div>
                <div className="col-span-2">
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;