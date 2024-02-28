"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const EditClassForm = ({id, title, description, price }) => {
  const router = useRouter()
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
        newTitle: data.title,
        newPrice: data.price,
        newDescription: data.description,
      };

      const res = await fetch(`http://localhost:3000/api/clases/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(courseInfo)
      })

      if(!res.ok){
        throw new Error("Failed to update class")
      }
      return router.push("/dashboard/teacher/allClass")
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div>
      <div className="min-h-screen bg-base-200 flex flex-col items-center">
        <div className="flex-col w-[450px] mt-5">
          <div className="card w-full shadow-2xl bg-base-100">
            <h2 className="text-3xl font-bold text-center mt-10">
              Update your class no:
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  {...register("title", { required: true })}
                  defaultValue={title}
                  placeholder="Course title"
                  className="input input-bordered"
                  required
                />
              </div>
              
              <div className="form-control">
                <input
                  type="text"
                  {...register("price", { required: true })}
                  defaultValue={price}
                  placeholder="price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <textarea
                  {...register("description", { required: true })}
                  defaultValue={description}
                  className="textarea textarea-bordered"
                  placeholder="Enter short description"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-[#4ADE80] hover:bg-[#34AC60] text-white text-2xl">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditClassForm;
