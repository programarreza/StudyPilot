"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [isShow, setIsShow] = useState(true);
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      // create user entry in the database
      const userInfo = {
        email: data.email,
        password: data.password,
        redirect: false,
      };
      console.log(userInfo);

      const res = await signIn("credentials", userInfo);
      if (res.error) {
        console.log("Invalid Credentials ");
        return;
      }else{
        console.log("login successfully");
      }

      router.replace("/");
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
                <h2 className="text-center text-3xl font-bold mt-5">Login</h2>

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
                      maxLength: 20,
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

                <div className="form-control mt-2">
                  <button
                    type="submit"
                    className="btn mr-5 bg-[#61adff] hover:bg-[#006ce1] text-white  "
                  >
                    Login In
                  </button>
                  <p className=" text-center mt-2">
                    Are you new user?{" "}
                    <Link href={"/signup"}>
                      <span className="font-semibold text-[#006ce1]">
                        Register Now
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

export default LoginForm;
