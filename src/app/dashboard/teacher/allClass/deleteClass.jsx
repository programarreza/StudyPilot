"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const DeleteClass = ({id}) => {
    const router = useRouter()
   const handleDelete = async ()=>{
      const confirmed = confirm("Are you sure?");
      if(confirmed){
        const res = await fetch(`http://localhost:3000/api/clases?id=${id}`, {
            method: "DELETE",
        })
        if(res.ok){
            router.refresh()
        }
      }
    }
    return (
        <div>
            <button onClick={handleDelete}><MdDeleteForever className='text-3xl' /></button>
        </div>
    );
};

export default DeleteClass;