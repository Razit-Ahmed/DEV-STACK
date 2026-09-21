import  { type Dispatch, type SetStateAction } from "react";

import TechCard from "./techCard";

import Yourstack from "./yourstac";

import type { Itech } from "../types/techType";

interface IAllTechProps {
  tech: Itech[];
  selectedTech: Itech[];
  setSelectedTech: Dispatch<SetStateAction<Itech[]>>;
}

const allStack = ({
  tech,
  selectedTech,
  setSelectedTech,
}: IAllTechProps) => {

  console.log(tech, "tech from all tech");

  return (
    <div className="mb-30">
      <h2 className=" font-bold text-5xl mt-15">
        Explore the{" "}
        <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>

      <p className="text-xl mt-5 mb-10">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="flex gap-5">

        <div className="grid grid-cols-3 gap-5">
          {tech.map((tech) => {
            return (
              <TechCard
                key={tech.id}
                tech={tech}
                selectedTech={selectedTech}
                setSelectedTech={setSelectedTech}
              />
            );
          })}
        </div>

        <div>
          <Yourstack
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
          />
        </div>

      </div>
    </div>
  );
};

export default allStack;