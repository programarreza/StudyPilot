"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const [isShow, setIsShow] = useState(true);

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
      const formData = new FormData();
      formData.append("image", image);

      const { data: imageData } = await axios.post(
        `https://api.imgbb.com/1/upload?key=e28e9ec82d2af62e0c5e6c9dee08d926`,
        formData
      );

      // create user entry in the database
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
        image: imageData?.data?.display_url,
      };

      try {
       
        const res = await fetch("api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });
        const data = await res.json()
        if (res.ok) {
          toast.success("registration successfully ");
          reset();
        } else {
          console.log("User registration failed");
        }
      } catch (error) {
        console.log("Error during registration:", error);
      }

      console.log(userInfo);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      <div className="w-full min-h-screen flex bg-cover bg-center bg-slate-100">
        <div className="hero">
          <div className="hero-content flex flex-col md:flex-row  rounded-xl justify-between">
            <div className="card w-1/1  flex-shrink-0 shadow-2xl">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body w-[380px] md:w-[450px] md:px-16 bg-white rounded-md"
              >
                <h2 className="text-center text-3xl font-bold mt-5">Sign Up</h2>
                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Full Name"
                    className="input input-bordered h-10 mr-5"
                  />
                  {errors.name && (
                    <span className="text-[#006ce1]">Name is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="input input-bordered h-10 mr-5"
                  />
                  {errors.email && (
                    <span className="text-[#006ce1]">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type={isShow ? "password" : "text"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 10,
                      // TODO: uncomment this validation
                      // pattern:
                      //   /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
                    })}
                    placeholder="Password"
                    className="input input-bordered h-10 mb-2 mr-5 relative"
                  />

                  {errors.password?.type === "required" && (
                    <p className="text-[#006ce1]">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-[#006ce1]">
                      Password must be 6 Character
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-[#006ce1]">
                      Password must be less den 20 Character
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-[#006ce1]">
                      Password must have one upper case one lower carse, one
                      number and one special character
                    </p>
                  )}
                  <p
                    onClick={() => setIsShow(!isShow)}
                    className="text-xl absolute cursor-pointer mt-7 ml-[270px]"
                  >
                    {isShow ? (
                      <FaEyeSlash className="text-black" />
                    ) : (
                      <FaEye className="text-black" />
                    )}
                  </p>
                </div>

                <div>
                  <label htmlFor="image" className="block mb-2 text-sm">
                    Upload Profile Image:
                  </label>
                  <input
                    {...register("image", { required: true })}
                    // required
                    type="file"
                    id="image"
                    accept="image/*"
                  />
                </div>

                <div className="form-control mt-2">
                  <button
                    type="submit"
                    className="btn  mr-5 bg-[#61adff] hover:bg-[#006ce1] text-white  "
                  >
                    Sign Up
                  </button>
                  <p className=" text-center mt-2">
                    Already registered?{" "}
                    <Link href={"/signin"}>
                      <span className="font-semibold text-[#006ce1]">
                        login Now
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
