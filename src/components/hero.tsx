import React from "react";
import Hero from "../assets/banner-stack.png";

const hero = () => {
  return (
    <div className="flex justify-between container mx-auto w-10/11">
      <div >
        <h2 className="text-[0F172A] text-bold text-6xl font-[inter] mt-20">
          Build Your Ideal <br></br>
          <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>{" "}
        </h2>
        <p className="mt-10">
          Explore frontend, backend, database, and tooling options,<br></br>{" "}
          compare them side by side, and put together the stack that fits your
          <br></br> next project.
        </p>
        <div className="mt-15 flex gap-5">
          <button className="rounded-lg bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] px-4 py-2 text-sm font-medium text-white">
            Explore Technologies
          </button>
          <button className="rounded-lg border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-700">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img src={Hero} alt="" />
      </div>
    </div>
  );
};

export default hero;
