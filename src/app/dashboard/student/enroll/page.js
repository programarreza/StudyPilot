"use client"
import axios from 'axios';
import React from 'react';

const page = () => {
    const handleClick = async ()=>{
        const enrollClassInfo = {
            email:'joy@gmail.com',
            title:'python',
            author:'joy',
            description:'pyhton learning',
            price:'120',
            image:"fhggkg",
            
        }
        const res = await fetch("/api/enrolledClass", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(enrollClassInfo),
          });
          return res.json()


    }
    return (
        <div>
            <button onClick={handleClick} classname='p-2 bg-green-500'>enroll</button>
        </div>
    );
};

export default page;