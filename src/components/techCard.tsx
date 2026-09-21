import React, { useState, type Dispatch, type SetStateAction } from "react";
import type { Itech } from "../types/techType";
import { toast } from "react-toastify";

const techCard = ({
  tech,
  selectedTech,
  setSelectedTech,
}: {
  tech: Itech;
  selectedTech: Itech[];
  setSelectedTech: Dispatch<SetStateAction<Itech[]>>;
}) => {
  const [isSelected, setIsSelected] = useState(false);

  console.log(isSelected, setIsSelected, "here");

  const handleAddStack = () => {
    setIsSelected(true);
    toast.success(`${tech.name} Is Added`);
    setSelectedTech([...selectedTech,tech])
  };


  

  return (
    <div className="w-80 max-w-sm rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <img src={tech.icon} className="h-10 w-10" />
        <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-sky-500">
          {" "}
          {tech.badge}{" "}
        </span>
      </div>

      <div className="mt-5">
        <h2 className="text-xl font-bold text-slate-900">{tech.name} </h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          {tech.description}
        </p>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3">
        <span className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600">
          {tech.category}
        </span>
        <span className="text-xs text-slate-500">{tech.difficulty}</span>
        <span className="text-sm font-medium text-slate-700">
          ⭐ {tech.rating}
        </span>
      </div>

      <button
        onClick={() => handleAddStack()}
        className={`mt-4 w-full rounded-lg bg-[#0B0F1A] py-2.5 text-sm font-medium text-white transition`}
        disabled={isSelected}
      >
        {isSelected === true ? "Added" : "Add to Stack"}
      </button>
    </div>
  );
};

export default techCard;
