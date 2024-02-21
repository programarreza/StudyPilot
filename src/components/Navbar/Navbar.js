'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from '@/assets/image/logo.png'
import Link from "next/link";

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
            <div className="h-16 bg-green-400 grid grid-cols-8 px-10 items-center justify-between">
                <div className=" h-16 col-span-2">
                    <Image  className="w-1/2" src={logo} alt='logo'/>
                </div>
                <div className="bg-white col-span-4 ">
                    <nav className="flex justify-center items-center gap-3 list-none">
                        <li>
                            Home
                        </li>
                        <li>
                            All Classes
                        </li>
                        <li>
                            Features
                        </li>
                        <li>
                            About
                        </li>
                    </nav>
                </div>
                <div className="col-span-2  flex justify-end">
                    <Link href={'/signin'}><button className="px-8 py-1 bg-black text-white text-center">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;