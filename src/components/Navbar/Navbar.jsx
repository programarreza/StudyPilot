"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/assets/image/logo.png";
import Link from "next/link";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const user = true;

<<<<<<< HEAD:src/components/Navbar/Navbar.js
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      setActive(scrollValue > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`h-24  ${active ? "bg-red-300" : ""}`}>
      <div className="h-8 bg-green-200">
        <marquee behavior="scroll" direction="left">
          here will be show important notice
        </marquee>
      </div>
      <div className="h-16 bg-green-400 grid grid-cols-8 px-10 items-center justify-between">
        <div className=" h-16 col-span-2">
          <Image className="w-1/2" src={logo} alt="logo" />
=======
    const [active, setActive] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollValue = window.scrollY;
            console.log(scrollValue)
            if(scrollValue>0){
                setActive(true)
            }
            else{
                setActive(false)
            }
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
>>>>>>> a741e29ddc066f7b5bf0f440a88d6534e11c380a:src/components/Navbar/Navbar.jsx
        </div>
        <div className="bg-white col-span-4 ">
          <nav className="flex justify-center items-center gap-3 list-none">
            <li>Home</li>
            <li>All Classes</li>
            <li>Features</li>
            <li>About</li>
          </nav>
        </div>
        <div className="col-span-2  flex justify-end items-center">
          <Link href={"/signin"}>
            <button className="px-8 py-1 bg-black text-white text-center">
              Login
            </button>
          </Link>

          <div className="dropdown dropdown-end">
            <label
              onClick={() => setIsShow(!isShow)}
              className="btn btn-ghost btn-circle avatar "
            >
              <div className="w-10 rounded-full ">
                <Image
                  src="https://i.postimg.cc/7PS6bh1w/profile.png"
                  width="100" height={"10"}
                  alt={"user profile"}
                />
              </div>
            </label>
          </div>
          {isShow && user ? (
            <ul className="menu  absolute menu-sm dropdown-content  mt-40 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
             

              <li>
                <p>user name</p>
              </li>
              <li>
                <p>dashboard</p>
              </li>
              <li>
                <button onClick={() => signOut()}>Log Out</button>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
