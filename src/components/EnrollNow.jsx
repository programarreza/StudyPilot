"use client"

import toast, { Toaster } from "react-hot-toast";

const EnrollNow = ({ classDetail }) => {
    const detais = classDetail.cls
    const classInfo = {...detais,email:"joy@gmail.com"}
    console.log(classInfo)
    const handleclick = async ()=>{
        const res = await fetch("http://localhost:3000/api/enrolledClass", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(classInfo),
        });
        if(res.ok){
            toast.success("class enrolled successfully ")
          }else{
            toast.error("class enrollment failed")
          }
    }

return (
    <div>
        <button onClick={handleclick} className="btn btn-primary">Enroll now</button>
        <Toaster />
    </div>
);
};

export default EnrollNow;