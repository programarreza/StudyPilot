import React from "react";
import demoPic from "@/assets/image/demo.jpg";
import Image from "next/image";

const getClases = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/clases", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch clases");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading clases:", error);
  }
};

const Clases = async () => {
    const clases = await getClases()

  return (
    <div className="mx-5">
      <h2 className="text-center my-5 text-4xl font-bold">My all clases</h2>
      <div className="grid grid-cols-3 gap-5">
        {clases?.map((Class) => (
          <div key={Class._id} className="card bg-base-100 shadow-xl">
            <figure className="overflow-hidden">
              <Image
                className="w-full h-[350px] transition-all duration-300 hover:scale-110"
                width={100}
                height={100}
                src={demoPic}
                alt={Class?.title}
                placeholder="empty"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{Class?.title}</h2>
              <p>{Class?.description}</p>
              <h2 className="text-[18px]">Total Enrollment:0</h2>
              <div className="card-actions justify-between items-center">
                <h3 className="text-xl font-semibold">
                  Price:<span> ${Class?.price}</span>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clases;
