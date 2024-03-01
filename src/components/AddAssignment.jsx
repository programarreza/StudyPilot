"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const AddAssignment = ({ classDetails }) => {

    // // console.log(classDetails)
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        try {

            // create user entry in the database
            const courseInfo = {
                title: data.title,
                // author: data.author,
                email: "joy@gmail.com",
                description: data.description,
                classId: classDetails._id,
                deadline: data.deadline
            };
            console.log(courseInfo);

            const res = await fetch("http://localhost:3000/api/assignment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(courseInfo),
            });
            if (res.ok) {
                toast.success("class added successfully ")
                reset()
            } else {
                toast.error("class add fail")
            }
        } catch (error) {
            console.log("Error", error);
            errors();
        }
    };


    return (
        <div>
            <div className='flex justify-center'>
                <button onClick={() => document.getElementById('my_modal_1').showModal()} className='p-2 text-white bg-green-700 rounded-md mt-5'>Create a new assignment</button>
            </div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
                        <input type="text" {...register("title", { required: true })} defaultValue={classDetails.title} placeholder="title" className="input input-bordered w-full max-w-xs" />
                        <p>Deadline:</p>
                        <input type="date" {...register("deadline", { required: true })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <textarea {...register("description", { required: true })} className="textarea textarea-bordered w-full max-w-xs" placeholder="description"></textarea>
                        <div className='flex justify-end'>
                            <button onClick={() => document.getElementById('my_modal_1').close()} className="btn">Add assignment</button>
                        </div>
                    </form>
                </div>
            </dialog>

            <Toaster />
        </div>
    );
};

export default AddAssignment;