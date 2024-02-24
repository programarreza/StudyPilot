"use client";
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const AddClass = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
        try {
          console.log(data);
          const image = data.image[0];
          // const imageData = await imageUpload(image);
          const formData = new FormData();
          formData.append("image", image);
    
          const { data: imageData } = await axios.post(
            `https://api.imgbb.com/1/upload?key=e28e9ec82d2af62e0c5e6c9dee08d926`,
            formData
          );
    
          // create user entry in the database
          const courseInfo = {
            title: data.title,
            author: data.author,
            price: data.price,
            description: data.description,
            image: imageData?.data?.display_url,
          };
          console.log(courseInfo);
        } catch (error) {
          console.log("Error", error);
        }
      };
    return (
        <div>
            <div className="min-h-screen bg-base-200 flex flex-col items-center">
                <div className="flex-col w-[450px] mt-5">
                    <div className="card w-full shadow-2xl bg-base-100">
                        <h2 className='text-5xl font-bold text-center mt-10'>Add your class</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <input type="text" {...register("title", { required: true })} placeholder="Course title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" {...register("author", { required: true })} placeholder="Author name" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <input type="text" {...register("price", { required: true })} placeholder="price" className="input input-bordered" required />
                            </div>
                            <div className='form-control'>
                                <textarea {...register("description", { required: true })} className="textarea textarea-bordered" placeholder="Enter short description"></textarea>
                            </div>
                            <div className='form-control'>
                            <p>Choose a photo</p>
                            <input type="file" {...register("image", { required: false })} className="file-input file-input-bordered w-full"/>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#4ADE80] hover:bg-[#34AC60] text-white text-2xl">Add Class</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClass;