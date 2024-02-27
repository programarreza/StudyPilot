"use client"
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const DeleteClass = ({id}) => {
    console.log(id)
   const handleDelete = (id)=>{
            //post request to delete the class
            console.log('the deleted class id is:',id)
    }
    return (
        <div>
            <button onClick={()=>handleDelete(id)}><MdDeleteForever className='text-3xl' /></button>
        </div>
    );
};

export default DeleteClass;